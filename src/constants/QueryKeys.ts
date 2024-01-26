/**
 * @format
 */
const QueryKeys = {
  legalPage: "legalPage",
  getVehicleList: "getVehicleList",
  batteryPackDetails: "batteryPackDetails",
  bmsOverallInfo: "bmsOverallInfo",
  bmsStatsInfoKey: "bmsStatsInfo",
  getBMSList: "getBMSList",
  batteryCycles: "batteryCycles",
  getProfile: "getProfile",
  getNotificationList: "getNotificationList",
  bmsFaultsHistory: "bmsFaultsHistory",
};

export type QueryKeysType = keyof typeof QueryKeys;

export { QueryKeys };
