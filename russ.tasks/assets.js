module.exports = {
  name: 'copy:assets',
  doc : 'copies assets to public directory',
  deps: [
    'ncp'
  ],
  func: (ncp, russ) => {
    ncp('src/assets', 'public', function(err) {
      if (err) return russ.reject(err);
      russ.log.success('Assets copied!');
      russ.resolve();
    });
  }
};
