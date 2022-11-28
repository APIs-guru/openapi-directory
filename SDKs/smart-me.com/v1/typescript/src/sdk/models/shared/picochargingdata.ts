import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PicoChargingDataStateEnum {
    Booting = "Booting",
    ReadyNoCarConnected = "ReadyNoCarConnected",
    ReadyCarConnected = "ReadyCarConnected",
    StartedWaitForCar = "StartedWaitForCar",
    Charging = "Charging",
    Offline = "Offline"
}


// PicoChargingData
/** 
 * Container class for the pico charging station API
**/
export class PicoChargingData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActiveChargingEnergy" })
  activeChargingEnergy?: number;

  @SpeakeasyMetadata({ data: "json, name=ActiveChargingPower" })
  activeChargingPower?: number;

  @SpeakeasyMetadata({ data: "json, name=Duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: PicoChargingDataStateEnum;

  @SpeakeasyMetadata({ data: "json, name=ValueDate" })
  valueDate?: Date;
}
