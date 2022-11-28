import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DeviceChargingStationStateEnum {
    Booting = "Booting",
    ReadyNoCarConnected = "ReadyNoCarConnected",
    ReadyCarConnected = "ReadyCarConnected",
    StartedWaitForCar = "StartedWaitForCar",
    Charging = "Charging",
    Offline = "Offline"
}

export enum DeviceDeviceEnergyTypeEnum {
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

export enum DeviceFamilyTypeEnum {
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

export enum DeviceMeterSubTypeEnum {
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


// Device
/** 
 * Container Class for the Web API
**/
export class Device extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActivePower" })
  activePower?: number;

  @SpeakeasyMetadata({ data: "json, name=ActivePowerL1" })
  activePowerL1?: number;

  @SpeakeasyMetadata({ data: "json, name=ActivePowerL2" })
  activePowerL2?: number;

  @SpeakeasyMetadata({ data: "json, name=ActivePowerL3" })
  activePowerL3?: number;

  @SpeakeasyMetadata({ data: "json, name=ActivePowerUnit" })
  activePowerUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=ActiveTariff" })
  activeTariff?: number;

  @SpeakeasyMetadata({ data: "json, name=AdditionalMeterSerialNumber" })
  additionalMeterSerialNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=AnalogOutput1" })
  analogOutput1?: number;

  @SpeakeasyMetadata({ data: "json, name=AnalogOutput2" })
  analogOutput2?: number;

  @SpeakeasyMetadata({ data: "json, name=ChargingStationState" })
  chargingStationState?: DeviceChargingStationStateEnum;

  @SpeakeasyMetadata({ data: "json, name=CounterReading" })
  counterReading?: number;

  @SpeakeasyMetadata({ data: "json, name=CounterReadingExport" })
  counterReadingExport?: number;

  @SpeakeasyMetadata({ data: "json, name=CounterReadingImport" })
  counterReadingImport?: number;

  @SpeakeasyMetadata({ data: "json, name=CounterReadingT1" })
  counterReadingT1?: number;

  @SpeakeasyMetadata({ data: "json, name=CounterReadingT2" })
  counterReadingT2?: number;

  @SpeakeasyMetadata({ data: "json, name=CounterReadingT3" })
  counterReadingT3?: number;

  @SpeakeasyMetadata({ data: "json, name=CounterReadingT4" })
  counterReadingT4?: number;

  @SpeakeasyMetadata({ data: "json, name=CounterReadingUnit" })
  counterReadingUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=Current" })
  current?: number;

  @SpeakeasyMetadata({ data: "json, name=CurrentL1" })
  currentL1?: number;

  @SpeakeasyMetadata({ data: "json, name=CurrentL2" })
  currentL2?: number;

  @SpeakeasyMetadata({ data: "json, name=CurrentL3" })
  currentL3?: number;

  @SpeakeasyMetadata({ data: "json, name=DeviceEnergyType" })
  deviceEnergyType?: DeviceDeviceEnergyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=DigitalInput1" })
  digitalInput1?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DigitalInput2" })
  digitalInput2?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DigitalOutput1" })
  digitalOutput1?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DigitalOutput2" })
  digitalOutput2?: boolean;

  @SpeakeasyMetadata({ data: "json, name=FamilyType" })
  familyType?: DeviceFamilyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=FlowRate" })
  flowRate?: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=MeterSubType" })
  meterSubType?: DeviceMeterSubTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PowerFactor" })
  powerFactor?: number;

  @SpeakeasyMetadata({ data: "json, name=PowerFactorL1" })
  powerFactorL1?: number;

  @SpeakeasyMetadata({ data: "json, name=PowerFactorL2" })
  powerFactorL2?: number;

  @SpeakeasyMetadata({ data: "json, name=PowerFactorL3" })
  powerFactorL3?: number;

  @SpeakeasyMetadata({ data: "json, name=Serial" })
  serial?: number;

  @SpeakeasyMetadata({ data: "json, name=SwitchOn" })
  switchOn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SwitchPhaseL1On" })
  switchPhaseL1On?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SwitchPhaseL2On" })
  switchPhaseL2On?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SwitchPhaseL3On" })
  switchPhaseL3On?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Temperature" })
  temperature?: number;

  @SpeakeasyMetadata({ data: "json, name=ValueDate" })
  valueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Voltage" })
  voltage?: number;

  @SpeakeasyMetadata({ data: "json, name=VoltageL1" })
  voltageL1?: number;

  @SpeakeasyMetadata({ data: "json, name=VoltageL2" })
  voltageL2?: number;

  @SpeakeasyMetadata({ data: "json, name=VoltageL3" })
  voltageL3?: number;
}
