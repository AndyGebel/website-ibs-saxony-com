<?php
declare(strict_types=1);

$recipient = getenv('IBS_CONTACT_FORM_RECIPIENT') ?: 'info@ibs-saxony.com';
$sender = getenv('IBS_CONTACT_FORM_SENDER') ?: 'info@ibs-saxony.com';

function clean_field(string $value, int $maxLength = 1800): string
{
    $value = str_replace(["\r", "\0"], ["\n", ""], $value);
    $value = preg_replace("/[ \t]+/", " ", $value) ?? $value;
    $value = trim($value);

    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $maxLength, 'UTF-8');
    }

    return substr($value, 0, $maxLength);
}

function post_field(string $key, int $maxLength = 1800): string
{
    $value = $_POST[$key] ?? '';
    if (is_array($value)) {
        $value = '';
    }

    return clean_field((string) $value, $maxLength);
}

function redirect_form(string $language, string $state): void
{
    $language = $language === 'en' ? 'en' : 'de';
    $path = $language === 'en' ? '/en/contact/' : '/de/kontakt/';
    $value = $state === 'sent'
        ? ($language === 'en' ? 'sent' : 'gesendet')
        : ($language === 'en' ? 'error' : 'fehler');

    header('Location: ' . $path . '?formular=' . $value . '#kontaktformular', true, 303);
    exit;
}

function encode_subject(string $subject): string
{
    return '=?UTF-8?B?' . base64_encode($subject) . '?=';
}

function valid_email_or_empty(string $email): string
{
    return filter_var($email, FILTER_VALIDATE_EMAIL) ? $email : '';
}

$language = post_field('language', 5) === 'en' ? 'en' : 'de';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirect_form($language, 'error');
}

if (post_field('website', 120) !== '') {
    redirect_form($language, 'sent');
}

$name = post_field('name', 120);
$email = valid_email_or_empty(post_field('email', 160));
$company = post_field('company', 160);
$phone = post_field('phone', 80);
$topic = post_field('topic', 120);
$message = post_field('message', 1800);
$privacyAccepted = ($_POST['privacy'] ?? '') === '1';
$recipient = valid_email_or_empty($recipient);
$sender = valid_email_or_empty($sender) ?: 'info@ibs-saxony.com';

if ($recipient === '' || $name === '' || $email === '' || $topic === '' || strlen($message) < 8 || !$privacyAccepted) {
    redirect_form($language, 'error');
}

$subject = 'IBS-Saxony Kontaktformular: ' . $topic;
$body = implode("\n", array_filter([
    'Neue Nachricht über das Kontaktformular von ibs-saxony.com',
    '',
    'Name: ' . $name,
    'E-Mail: ' . $email,
    $company !== '' ? 'Firma/Betrieb: ' . $company : '',
    $phone !== '' ? 'Telefon: ' . $phone : '',
    'Anliegen: ' . $topic,
    '',
    'Nachricht:',
    $message,
    '',
    'Datenschutzhinweis bestätigt: ja',
    'Gesendet am: ' . gmdate('c'),
    '',
    'Hinweis: Diese Nachricht wurde automatisch über das Kontaktformular der Website erzeugt. Bitte direkt an die angegebene E-Mail-Adresse antworten.'
], static fn (string $line): bool => $line !== ''));

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'From: IBS-Saxony Website <' . $sender . '>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion()
];

$parameters = '-f' . $sender;
$sent = @mail($recipient, encode_subject($subject), $body, implode("\r\n", $headers), $parameters);

if (!$sent) {
    $sent = @mail($recipient, encode_subject($subject), $body, implode("\r\n", $headers));
}

redirect_form($language, $sent ? 'sent' : 'error');
