import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DeviceToPostDeviceEnergyTypeEnum {
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
export declare enum DeviceToPostMeterSubTypeEnum {
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
/**
 * Container Class for the Web API
**/
export declare class DeviceToPost extends SpeakeasyBase {
    activePower?: number;
    counterReading?: number;
    counterReadingExport?: number;
    counterReadingExportT1?: number;
    counterReadingExportT2?: number;
    counterReadingT1?: number;
    counterReadingT2?: number;
    current?: number;
    currentL1?: number;
    currentL2?: number;
    currentL3?: number;
    deviceEnergyType?: DeviceToPostDeviceEnergyTypeEnum;
    digitalInput1?: boolean;
    id?: string;
    meterSubType?: DeviceToPostMeterSubTypeEnum;
    name?: string;
    powerFactor?: number;
    powerFactorL1?: number;
    powerFactorL2?: number;
    powerFactorL3?: number;
    serial?: number;
    temperature?: number;
    valueDate?: Date;
    voltage?: number;
    voltageL1?: number;
    voltageL2?: number;
    voltageL3?: number;
}
