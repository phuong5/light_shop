// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const jwtRegex = {
  applied: ':81$',
  flags: 'i',
};

export const environment = {
  production: false,
  session_timeout: 7200,
  default_lang: 'en',
  languages: ['vi', 'en'],
  jwt_applied_hosts: [new RegExp(jwtRegex.applied, jwtRegex.flags)],
  jwt_ignored_urls: null,
  api_base_url: {
    '^(localhost|127\\.0\\.0\\.1|192\\.168\\.[1-9]\\d+\\.\\d+)\\b':
      'http://localhost:81',
    '^.*': 'http://192.168.73.186:81',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
