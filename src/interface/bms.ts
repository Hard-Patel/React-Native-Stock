export interface IBMSAPIData extends IGeneralResponse {
  data: IBMSInfo;
}

export interface IBMSItem {
  BFw: string;
  CCfg: string;
  CChem: string;
  CTy: string;
  CUn: number;
  Cap: number;
  Cycl: number;
  TTy: string;
  UID: string;
  VehicleComponentRel: Array<IBMSVehicleComponentRel>;
  id: string;
  is_cloud_registered: number;
  is_live: number;
  model: IModelItem;
  sn: string;
  activation_date: string | null;
  createdAt: string;
  device_identity_id: null | string;
  manufacture_date: null | string;
  name: string;
  updatedAt: string;
  warranty_end_date: null | string;
  warranty_start_date: null | string;
}

export interface IModelItem {
  code: string;
  id: string;
  name: string;
  oem_id: string;
}

export interface IBMSVehicleComponentRel extends IIsLiveVehicleObject {
  vehicle_UID: string;
  bms_UID: string;
  createdAt: string;
  updatedAt: string;
  mcu_UID: string;
}

export interface IBMSInfo {
  brand: string;
  capacity: number;
  cell_chemistry: string;
  cell_configuration: string;
  cell_type: string;
  cell_unit: number;
  current: string;
  current_state: string;
  cycle_count: number;
  firmware: string;
  is_live: number;
  is_liveVehicle: Array<IIsLiveVehicleObject>;
  loc: string;
  power: number;
  resserved_attributes: { BMS: Object };
  sn: string;
  temperature_max: number;
  temperature_min: number;
  thermal_type: string;
  uid: string;
  vehicle_uid: string;
  voltage: string;
  manufacture_date?: string;
  bms_data: IBMSInfoData;
}

export interface IBMSInfoData {
  UID: string;
  VehicleComponentRel: Array<IBMSVehicleComponentRel>;
  activation_date: null | string;
  createdAt: string;
  created_by: null;
  created_type: string;
  device_identity_id: null | string;
  id: string;
  is_cloud_registered: number;
  is_live: number;
  manufacture_date?: string | null;
  model: {
    BFw: number;
    CCfg: null;
    CChem: null;
    CTy: null;
    CUn: null;
    Cap: null;
    Cycl: number;
    TTy: null;
    cell_number: number;
    cell_pack_type: null;
    cell_voltage: null;
    code: string;
    configuration_step: number;
    connection_type: string;
    createdAt: string;
    created_by: string;
    id: string;
    is_configured: number;
    launch_date: string;
    max_pack_voltage: null;
    min_pack_voltage: null;
    name: string;
    oem_id: string;
    pack_rated_capacity: null;
    pack_voltage: null;
    product_id: null;
    rated_current: null;
    rated_energy: null;
    rated_total_voltage: null;
    resistance: null;
    status: 1;
    telemetry_template: [Object];
    updatedAt: string;
    updated_by: string;
    warranty_duration: 1;
  };
  model_id: string;
  name: string;
  oem: { name: string };
  oem_id: string;
  sn: string;
  status: number;
  updatedAt: string;
  updated_by: string;
  warranty_end_date: null;
  warranty_start_date: null;
}

export interface IIsLiveVehicleObject {
  vehicle: { is_cloud_registered: number; is_live: number };
}

export interface IBMSStatsAPIResponse extends IGeneralResponse {
  data: IBMSStatsInfo;
}

export interface IBMSStatsInfo {
  id: string;
  UID: null | string;
  oem_id: string;
  bms_UID: string;
  sn: string;
  Volt: number;
  BCur: number;
  Soc: number;
  Soh: number;
  BTemp: number;
  CyCnt: number;
  BSt: number;
  MinDchV: number;
  MaxChgV: number;
  R21: null;
  R22: null;
  R23: null;
  R24: null;
  R25: null;
  R26: null;
  R27: null;
  R28: null;
  R29: null;
  R30: null;
  R31: null;
  R32: null;
  R33: null;
  R34: null;
  R35: null;
  R36: null;
  R37: null;
  R38: null;
  R39: null;
  R40: null;
  flt: null;
  alt: null;
  loc: { Lt: number; Lg: number; selectedLocationIndex: number };
  createdAt: string;
  updatedAt: string;
  resserved_attributes: { BMS: Object };
  is_live: number;
  is_liveVehicle: [];
  Cell: ICellInfo;
}

export interface ICellInfo {
  St: Array<number>;
  V: Array<number>;
  Tmp: Array<number>;
}

export type IBMSStatsHandler = {
  refreshBMSStats: () => void;
  refreshBatteryComponent: () => void;
};

export interface IBMSPackDetails {
  CellSt: [number];
  CellTmp: [number];
  CellV: [number];
  cell_number: string;
}

export interface IBMSCycleItem {
  UID: string;
  cc_id: string;
  charge_status: number;
  createdAt: string;
  duration: number;
  end_date: string;
  end_soc: number;
  id: string;
  start_date: string;
  start_soc: number;
  updatedAt: string;
}

export interface IBMSStatsResponse extends IGeneralResponse {
  data: IBMSStatsInfo;
}

export interface IGeneralResponse {
  cancel: boolean;
  errors: any;
  message: string;
  status: boolean;
  statusCode: number;
}

export interface IBMSBatteryCycleLazyLoadingParams {
  uid: string;
  filter: number;
}

export type BatteryInformationComponentProps = {
  navigation: any;
  cellInformation: any;
  expanded: any;
  setExpanded: any;
  isLoading: boolean;
  isLive: boolean;
  isBMSDirectUser: boolean;
  refetch: () => void;
};

export type CellItem = { status: number; voltage: number };

export interface IBMSCellItem {
  item: CellItem;
  index: number;
}

export type TemperatureInformationComponent = {
  navigation: any;
  cellInformation: any;
  expanded: any;
  setExpanded: any;
  isLoading: boolean;
};

export interface IBMSFaultItem {
  createdAt: string;
  is_closed: number;
  fault: {
    value: number;
    display_text: string;
    type: string;
    component: string;
    category: string;
    severity: string;
    createdAt: string;
    vcu_model_id: null | string;
    vcu_model: null | string;
    mcu_model_id: null | string;
    mcu_model: null | string;
    bms_model_id: string;
    bms_model: {
      name: string;
      code: string;
      id: string;
    };
    vehicle_model_id: null | string;
    vehicle_model: null | string;
  };
}
