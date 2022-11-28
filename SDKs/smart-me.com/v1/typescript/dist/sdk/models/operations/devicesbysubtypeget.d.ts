import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DevicesBySubTypeGetMeterSubTypeEnum {
    MeterSubTypeUnknown = "MeterSubTypeUnknown",
    MeterSubTypeCold = "MeterSubTypeCold",
    MeterSubTypeHeat = "MeterSubTypeHeat",
    MeterSubTypeChargingStation = "MeterSubTypeChargingStation",
    MeterSubTypeElectricity = "MeterSubTypeElectricity",
    MeterSubTypeWater = "MeterSubTypeWater",
    MeterSubTypeGas = "MeterSubTypeGas",
    MeterSubTypeElectricityHeat = "MeterSubTypeElectricityHeat",
    MeterSubTypeTemperature = "MeterSubTypeTemperature",
    MeterSubTypeVirtualBattery = "MeterSubTypeVirtualBattery"
}
export declare class DevicesBySubTypeGetQueryParams extends SpeakeasyBase {
    meterSubType: DevicesBySubTypeGetMeterSubTypeEnum;
}
export declare class DevicesBySubTypeGetRequest extends SpeakeasyBase {
    queryParams: DevicesBySubTypeGetQueryParams;
}
export declare class DevicesBySubTypeGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    devices?: shared.Device[];
    statusCode: number;
}
