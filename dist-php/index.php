<?php
$ibsGaMeasurementId = getenv('VITE_GA_MEASUREMENT_ID') ?: getenv('PUBLIC_GA_MEASUREMENT_ID') ?: getenv('GA_MEASUREMENT_ID') ?: "";
$ibsClarityProjectId = getenv('PUBLIC_CLARITY_PROJECT_ID') ?: getenv('VITE_CLARITY_PROJECT_ID') ?: getenv('CLARITY_PROJECT_ID') ?: "";
$ibsAnalyticsConfig = [
  'measurementId' => $ibsGaMeasurementId,
  'clarityProjectId' => $ibsClarityProjectId,
];
$ibsHasAnalytics = $ibsGaMeasurementId !== '' || $ibsClarityProjectId !== '';
?>
<!doctype html><title>Redirecting to: /de/</title><meta http-equiv="refresh" content="2;url=/de/"><meta name="robots" content="noindex"><link rel="canonical" href="https://ibs-saxony.com/de/"><body>	<a href="/de/">Redirecting from <code>/</code> to <code>/de/</code></a><?php if ($ibsHasAnalytics): ?>
    <aside class="consent-banner" aria-label="Analyse-Cookies akzeptieren?">
      <div>
        <h2>Analyse-Cookies akzeptieren?</h2>
        <p>Wir nutzen Google Analytics und Microsoft Clarity nur, wenn Sie aktiv zustimmen. So sehen wir, welche Inhalte hilfreich sind, ohne vor Ihrer Zustimmung Tracking zu laden.</p>
        <a href="/de/datenschutz">Datenschutz lesen</a>
      </div>
      <div class="consent-actions">
        <button class="button button-gold consent-primary" type="button">Ich stimme zu</button>
        <button class="button button-secondary" type="button">Nur notwendige Einstellungen</button>
      </div>
    </aside>
<?php endif; ?>
    <script src="/assets/static-site.js" defer></script>
  </body>