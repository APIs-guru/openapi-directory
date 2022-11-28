import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DevicesByEnergyGetMeterEnergyTypeEnum {
    MeterTypeUnknown = "MeterTypeUnknown",
    MeterTypeElectricity = "MeterTypeElectricity",
    MeterTypeWater = "MeterTypeWater",
    MeterTypeGas = "MeterTypeGas",
    MeterTypeHeat = "MeterTypeHeat",
    MeterTypeHca = "MeterTypeHCA",
    MeterTypeAllMeters = "MeterTypeAllMeters",
    MeterTypeTemperature = "MeterTypeTemperature",
    MeterTypeMBusGateway = "MeterTypeMBusGateway",
    MeterTypeRs485Gateway = "MeterTypeRS485Gateway",
    MeterTypeCustomDevice = "MeterTypeCustomDevice",
    MeterTypeCompressedAir = "MeterTypeCompressedAir",
    MeterTypeSolarLog = "MeterTypeSolarLog",
    MeterTypeVirtualMeter = "MeterTypeVirtualMeter",
    MeterTypeWmBusGateway = "MeterTypeWMBusGateway"
}
export declare class DevicesByEnergyGetQueryParams extends SpeakeasyBase {
    meterEnergyType: DevicesByEnergyGetMeterEnergyTypeEnum;
}
export declare class DevicesByEnergyGetRequest extends SpeakeasyBase {
    queryParams: DevicesByEnergyGetQueryParams;
}
export declare class DevicesByEnergyGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    devices?: shared.Device[];
    statusCode: number;
}
