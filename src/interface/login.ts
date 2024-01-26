import { IGeneralResponse } from "./bms";
import { IVehicleData } from "./vehicle";

/**
 * @format
 */
export interface ILogin {
  LoginData: ILoginData;
}

export interface ILoginData {
  authentication: {
    refreshToken: string;
    token: string;
  };
  email: string;
  id: string;
  phone: string;
  phone_iso: string;
  profile: IProfile;
  Oem: [IOEMType];
  status: string;
}

export interface IOEMType {
  created_type: string;
  id: string;
}

export interface IProfile {
  avatar: null | string;
  createdAt: string;
  created_by: string;
  dealer_id: null | string;
  default_page_size: null | string;
  first_name: string;
  fleet_id: null | string;
  id: string;
  is_email_verified: number;
  is_owner: null | string;
  is_phone_verified: number;
  last_name: string;
  oem_id: string;
  role_sc: string;
  updatedAt: string;
  user_id: string;
}

export enum ROLE_SHORT_CODE {
  SUPER_ADMIN = "SA",
  SUPER_EMPLOYEE = "SE",
  OEM_ADMIN = "OEMA",
  OEM_EMPLOYEE = "OEME",
  DRIVER = "DR",
  EV_OWNER = "EVO",
  FLEET_ADMIN = "FA",
  FLEET_EMPLOYEE = "FE",
  DEALER_ADMIN = "DA",
  DEALER_EMPLOYEE = "DE",
  BMS_ADMIN = "BMSA",
  BMS_EMPLOYEE = "BMSE",
  MCU_ADMIN = "MCUA",
  MCU_EMPLOYEE = "MCUE",
  VCU_ADMIN = "VCUA",
  VCU_EMPLOYEE = "VCUE",
  GPS_ADMIN = "GPSA",
  GPS_EMPLOYEE = "GPSE",
  OBC_ADMIN = "OBCA",
  OBC_EMPLOYEE = "OBCE",
  DCDC_ADMIN = "DCDCA",
  DCDC_EMPLOYEE = "DCDCE",
  BTMS_ADMIN = "BTMSA",
  BTMS_EMPLOYEE = "BTMSE",
  TPMS_ADMIN = "TPMSA",
  TPMS_EMPLOYEE = "TPMSE",
}

export interface ISelectedVehicle {
  SelectedVehicle: IVehicleData;
}

export interface ISendOTPRequest {
  onSendOtp: (data: ISendOTPResponse) => void;
  onSendOTPError: (data: any) => void;
  isMobileNumber: boolean;
  user_id: string;
}

export interface ISendOTPResponse extends IGeneralResponse {
  data: ISendOTPResponseData;
}

export interface ISendOTPResponseData {
  email: string;
  otp: number;
  phone: string;
  phone_iso: string;
  user_id: string;
}
export interface IVerifyOTPRequest {
  user_id: string;
  otp: string;
  device_type: number;
  device_token: string;
  otpVerify: (data: IVerifyOTPResponse) => void;
  otpVerifyError: (error: any) => void;
}

export interface IVerifyOTPResponse extends IGeneralResponse {
  data: ILoginData;
}
