import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DeviceChargingStationStateEnum {
    Booting = "Booting",
    ReadyNoCarConnected = "ReadyNoCarConnected",
    ReadyCarConnected = "ReadyCarConnected",
    StartedWaitForCar = "StartedWaitForCar",
    Charging = "Charging",
    Offline = "Offline"
}
export declare enum DeviceDeviceEnergyTypeEnum {
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
export declare enum DeviceFamilyTypeEnum {
    MeterFamilyTypeUnknown = "MeterFamilyTypeUnknown",
    MeterFamilyTypeSmartMeConnectV1 = "MeterFamilyTypeSmartMeConnectV1",
    MeterFamiliyTypeSmartMeMeter = "MeterFamiliyTypeSmartMeMeter",
    MeterFamiliyTypeSmartMeMeterWithSwitch = "MeterFamiliyTypeSmartMeMeterWithSwitch",
    MeterFamilyTypeMBusGatewayV1 = "MeterFamilyTypeMBusGatewayV1",
    MeterFamilyTypeRs485GatewayV1 = "MeterFamilyTypeRS485GatewayV1",
    MeterFamilyTypeKamstrupModule = "MeterFamilyTypeKamstrupModule",
    MeterFamilyTypeSmartMe3PhaseMeter80A = "MeterFamilyTypeSmartMe3PhaseMeter80A",
    MeterFamilyTypeSmartMe3PhaseMeter32A = "MeterFamilyTypeSmartMe3PhaseMeter32A",
    MeterFamilyTypeSmartMe3PhaseTelstarTransformer = "MeterFamilyTypeSmartMe3PhaseTelstarTransformer",
    MeterFamilyTypeLandisGyrModule = "MeterFamilyTypeLandisGyrModule",
    MeterFamilyTypeFnnOpticalModule = "MeterFamilyTypeFnnOpticalModule",
    MeterFamilyTypeSmartMe3PhaseTelstar80AWiFi = "MeterFamilyTypeSmartMe3PhaseTelstar80AWiFi",
    MeterFamilyTypeSmartMe3PhaseTelstar80AMobile = "MeterFamilyTypeSmartMe3PhaseTelstar80AMobile",
    MeterFamilyTypeSmartMe1PhaseMeter80Av2WiFi = "MeterFamilyTypeSmartMe1PhaseMeter80AV2WiFi",
    MeterFamilyTypeSmartMe1PhaseMeter32Av2WiFi = "MeterFamilyTypeSmartMe1PhaseMeter32AV2WiFi",
    MeterFamilyTypeSmartMe1PhaseMeter80AGprs = "MeterFamilyTypeSmartMe1PhaseMeter80AGprs",
    MeterFamilyTypeSmartMe1PhaseMeter32AGprs = "MeterFamilyTypeSmartMe1PhaseMeter32AGprs",
    MeterFamilyTypeWmBusGatewayV1 = "MeterFamilyTypeWMBusGatewayV1",
    MeterFamilyTypeSmartMe3PhaseTelstarTransformerMobile = "MeterFamilyTypeSmartMe3PhaseTelstarTransformerMobile",
    MeterFamilyTypeMithralHallV1 = "MeterFamilyTypeMithralHallV1",
    MeterFamilyTypeRestApiMeter = "MeterFamilyTypeRestApiMeter",
    MeterFamilyTypeVirtualBillingMeter = "MeterFamilyTypeVirtualBillingMeter"
}
export declare enum DeviceMeterSubTypeEnum {
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
export declare class Device extends SpeakeasyBase {
    activePower?: number;
    activePowerL1?: number;
    activePowerL2?: number;
    activePowerL3?: number;
    activePowerUnit?: string;
    activeTariff?: number;
    additionalMeterSerialNumber?: string;
    analogOutput1?: number;
    analogOutput2?: number;
    chargingStationState?: DeviceChargingStationStateEnum;
    counterReading?: number;
    counterReadingExport?: number;
    counterReadingImport?: number;
    counterReadingT1?: number;
    counterReadingT2?: number;
    counterReadingT3?: number;
    counterReadingT4?: number;
    counterReadingUnit?: string;
    current?: number;
    currentL1?: number;
    currentL2?: number;
    currentL3?: number;
    deviceEnergyType?: DeviceDeviceEnergyTypeEnum;
    digitalInput1?: boolean;
    digitalInput2?: boolean;
    digitalOutput1?: boolean;
    digitalOutput2?: boolean;
    familyType?: DeviceFamilyTypeEnum;
    flowRate?: number;
    id?: string;
    meterSubType?: DeviceMeterSubTypeEnum;
    name?: string;
    powerFactor?: number;
    powerFactorL1?: number;
    powerFactorL2?: number;
    powerFactorL3?: number;
    serial?: number;
    switchOn?: boolean;
    switchPhaseL1On?: boolean;
    switchPhaseL2On?: boolean;
    switchPhaseL3On?: boolean;
    temperature?: number;
    valueDate?: Date;
    voltage?: number;
    voltageL1?: number;
    voltageL2?: number;
    voltageL3?: number;
}
