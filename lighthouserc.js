module.exports = {
  ci: {
    assert: {
      // preset: 'lighthouse:no-pwa',
      assertions: {
        'categories:performance': ['off'],
        'categories:accessibility': ['off'],
        'categories:best-practices': ['off', { minScore: 0.75 }],
        'categories:seo': ['warn', { minScore: 0.9 }],
      },
    },
    collect: {
      numberOfRuns: 1,
      staticDistDir: '../sites/gatsby/public/',
      maxAutodiscoverUrls: 0,
    },
  },
};