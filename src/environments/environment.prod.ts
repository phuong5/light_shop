// noinspection JSUnusedGlobalSymbols

const jwtRegex = {
  applied: "^.*",
  ignored: "^((?!/api/).)*$",
  flags: "i",
};

export const environment = {
  production: true,
  session_timeout: 7200,
  default_lang: "vi",
  languages: ["vi", "en"],
  jwt_applied_hosts: [new RegExp(jwtRegex.applied)],
  jwt_ignored_urls: [new RegExp(jwtRegex.ignored, jwtRegex.flags)],
  api_base_url: {
    "^.*": "/api",
  },
};
