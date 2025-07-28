export const API_ENDPOINTS = {
  /*LAUNCHERS */
  LAUNCHERS_BASE:
    "https://lldev.thespacedevs.com/2.3.0/launcher_configurations/?manufacturer__name=SpaceX&mode=normal&active=true",
  LAUNCHERS_DETAIL:
    "https://lldev.thespacedevs.com/2.3.0/launcher_configurations/",

  /*LAUNCHES */
  LAUNCHES_BASE: "https://lldev.thespacedevs.com/2.2.0/launch/previous/",
  LAUNCHES_FILTER_DATA:
    "https://lldev.thespacedevs.com/2.2.0/launch/previous/?search=spacex&limit=500",
  LAUNCHER_CONFIG:
    "https://lldev.thespacedevs.com/2.2.0/config/launcher/?search=spacex&mode=list",
  LAUNCH_STATUS: "https://lldev.thespacedevs.com/2.2.0/config/launchstatus/",
  LAUNCH_DETAILS: "https://lldev.thespacedevs.com/2.2.0/launch/",

  /*SHIPS */
  SHIPS_BASE:
    "https://lldev.thespacedevs.com/2.3.0/spacecraft_configurations/?agency=121&in_use=True&mode=normal",
  SHIPS_DETAILS:
    "https://lldev.thespacedevs.com/2.3.0/spacecraft_configurations/?agency=121&in_use=True&mode=detailed&name=",

  /*TRIPULATION */
  TRIPULATION_BASE:
    "https://lldev.thespacedevs.com/2.3.0/astronauts/?agency_ids=44,121,27,37,1022&last_flight__gte=2020-05-30&has_flown=true&ordering=-first_flight&is_human=true",
  TRIPULATION_DETAILS: "https://lldev.thespacedevs.com/2.3.0/astronauts/",
};

export const API_CONFIG = {
  DEFAULT_PARAMS: "?mode=normal&search=spacex&ordering=-net",
  DEFAULT_LIMIT: 8,
};
