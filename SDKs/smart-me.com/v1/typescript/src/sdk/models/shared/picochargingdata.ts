import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PicoChargingDataStateEnum {
    Booting = "Booting"
,    ReadyNoCarConnected = "ReadyNoCarConnected"
,    ReadyCarConnected = "ReadyCarConnected"
,    StartedWaitForCar = "StartedWaitForCar"
,    Charging = "Charging"
,    Offline = "Offline"
}


// PicoChargingData
/** 
 * Container class for the pico charging station API
**/
export class PicoChargingData extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActiveChargingEnergy" })
  activeChargingEnergy?: number;

  @Metadata({ data: "json, name=ActiveChargingPower" })
  activeChargingPower?: number;

  @Metadata({ data: "json, name=Duration" })
  duration?: number;

  @Metadata({ data: "json, name=State" })
  state?: PicoChargingDataStateEnum;

  @Metadata({ data: "json, name=ValueDate" })
  valueDate?: Date;
}
