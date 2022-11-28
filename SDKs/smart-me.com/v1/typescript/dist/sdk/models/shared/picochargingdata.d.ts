import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PicoChargingDataStateEnum {
    Booting = "Booting",
    ReadyNoCarConnected = "ReadyNoCarConnected",
    ReadyCarConnected = "ReadyCarConnected",
    StartedWaitForCar = "StartedWaitForCar",
    Charging = "Charging",
    Offline = "Offline"
}
/**
 * Container class for the pico charging station API
**/
export declare class PicoChargingData extends SpeakeasyBase {
    activeChargingEnergy?: number;
    activeChargingPower?: number;
    duration?: number;
    state?: PicoChargingDataStateEnum;
    valueDate?: Date;
}
