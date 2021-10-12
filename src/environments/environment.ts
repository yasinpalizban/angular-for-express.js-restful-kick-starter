// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,

  // baseUrl: 'http://localhost:3000/api/',
  // siteUrl: 'http://localhost:3000/',
  baseUrl: 'https://api.testprototype.ir/api/',
  siteUrl: 'https://api.testprototype.ir/',
  siteAddress: {
    one: 'http://localhost:4200',
    two: 'http://localhost:4200',
  },
  logger: true,
  pusher: {
    key: '3bf76050d243c21ee0ce',
    cluster: 'ap2',
  },
  captcha: {
    siteKey: "6Lel1sAcAAAAAFyPD0cyboLEFj_V4bIY_m3Dl1vt",
    secretKey: "6Lel1sAcAAAAAP5UDAY1aNIMdfv0ZhnqFWAMI6oJ"
  },

  socialMedia: {
    google: {
      clientId: '',
      clientSecret: ''
    },
    facebook: {
      clientId: '',
      clientSecret: ''
    },
    instagram: {
      clientId: '',
      clientSecret: ''
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
