module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/reports',
        'http://localhost:3000/reports/1',
        'http://localhost:3000/properties',
        'http://localhost:3000/properties/1'
      ],
      numberOfRuns: 3,
      settings: {
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
        preset: 'desktop',
        throttling: {
          rttMs: 40,
          throughputKbps: 10240,
          cpuSlowdownMultiplier: 1,
          requestLatencyMs: 0,
          downloadThroughputKbps: 0,
          uploadThroughputKbps: 0
        }
      }
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'offscreen-images': 'off',
        'uses-webp-images': 'off',
        'uses-responsive-images': 'off',
        'max-potential-fid': ['warn', { maxNumericValue: 300 }],
        'first-contentful-paint': ['error', { maxNumericValue: 2000 }],
        'interactive': ['error', { maxNumericValue: 3000 }],
        'speed-index': ['error', { maxNumericValue: 3000 }],
        'first-meaningful-paint': ['error', { maxNumericValue: 2000 }],
        'first-cpu-idle': ['error', { maxNumericValue: 3000 }]
      }
    },
    budgets: {
      performance: 90,
      accessibility: 90,
      'best-practices': 85,
      seo: 90
    }
  }
};
