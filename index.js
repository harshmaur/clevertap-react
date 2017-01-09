var ClevertapReact = {

  initialize(accountId) {
    window.clevertap = { event: [], profile: [], account: [], onUserLogin: [], notifications: [] };
    window.clevertap.account.push({ 'id': accountId });
    (function () {
      let wzrk = document.createElement('script');
      wzrk.type = 'text/javascript';
      wzrk.async = true;
      wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/a.js';
      let s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wzrk, s);
    })();
  },

  event(name, payload = {}) {
    window.clevertap.event.push(name, payload);
  },

  profile(payload) {
    window.clevertap.profile.push(payload);
  },

  logout() {
    window.clevertap.logout();
  }
};

module.exports = ClevertapReact;