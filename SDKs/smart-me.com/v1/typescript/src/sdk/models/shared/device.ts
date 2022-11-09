import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DeviceChargingStationStateEnum {
    Booting = "Booting"
,    ReadyNoCarConnected = "ReadyNoCarConnected"
,    ReadyCarConnected = "ReadyCarConnected"
,    StartedWaitForCar = "StartedWaitForCar"
,    Charging = "Charging"
,    Offline = "Offline"
}

export enum DeviceDeviceEnergyTypeEnum {
    MeterTypeUnknown = "MeterTypeUnknown"
,    MeterTypeElectricity = "MeterTypeElectricity"
,    MeterTypeWater = "MeterTypeWater"
,    MeterTypeGas = "MeterTypeGas"
,    MeterTypeHeat = "MeterTypeHeat"
,    MeterTypeHca = "MeterTypeHCA"
,    MeterTypeAllMeters = "MeterTypeAllMeters"
,    MeterTypeTemperature = "MeterTypeTemperature"
,    MeterTypeMBusGateway = "MeterTypeMBusGateway"
,    MeterTypeRs485Gateway = "MeterTypeRS485Gateway"
,    MeterTypeCustomDevice = "MeterTypeCustomDevice"
,    MeterTypeCompressedAir = "MeterTypeCompressedAir"
,    MeterTypeSolarLog = "MeterTypeSolarLog"
,    MeterTypeVirtualMeter = "MeterTypeVirtualMeter"
,    MeterTypeWmBusGateway = "MeterTypeWMBusGateway"
}

export enum DeviceFamilyTypeEnum {
    MeterFamilyTypeUnknown = "MeterFamilyTypeUnknown"
,    MeterFamilyTypeSmartMeConnectV1 = "MeterFamilyTypeSmartMeConnectV1"
,    MeterFamiliyTypeSmartMeMeter = "MeterFamiliyTypeSmartMeMeter"
,    MeterFamiliyTypeSmartMeMeterWithSwitch = "MeterFamiliyTypeSmartMeMeterWithSwitch"
,    MeterFamilyTypeMBusGatewayV1 = "MeterFamilyTypeMBusGatewayV1"
,    MeterFamilyTypeRs485GatewayV1 = "MeterFamilyTypeRS485GatewayV1"
,    MeterFamilyTypeKamstrupModule = "MeterFamilyTypeKamstrupModule"
,    MeterFamilyTypeSmartMe3PhaseMeter80A = "MeterFamilyTypeSmartMe3PhaseMeter80A"
,    MeterFamilyTypeSmartMe3PhaseMeter32A = "MeterFamilyTypeSmartMe3PhaseMeter32A"
,    MeterFamilyTypeSmartMe3PhaseTelstarTransformer = "MeterFamilyTypeSmartMe3PhaseTelstarTransformer"
,    MeterFamilyTypeLandisGyrModule = "MeterFamilyTypeLandisGyrModule"
,    MeterFamilyTypeFnnOpticalModule = "MeterFamilyTypeFnnOpticalModule"
,    MeterFamilyTypeSmartMe3PhaseTelstar80AWiFi = "MeterFamilyTypeSmartMe3PhaseTelstar80AWiFi"
,    MeterFamilyTypeSmartMe3PhaseTelstar80AMobile = "MeterFamilyTypeSmartMe3PhaseTelstar80AMobile"
,    MeterFamilyTypeSmartMe1PhaseMeter80Av2WiFi = "MeterFamilyTypeSmartMe1PhaseMeter80AV2WiFi"
,    MeterFamilyTypeSmartMe1PhaseMeter32Av2WiFi = "MeterFamilyTypeSmartMe1PhaseMeter32AV2WiFi"
,    MeterFamilyTypeSmartMe1PhaseMeter80AGprs = "MeterFamilyTypeSmartMe1PhaseMeter80AGprs"
,    MeterFamilyTypeSmartMe1PhaseMeter32AGprs = "MeterFamilyTypeSmartMe1PhaseMeter32AGprs"
,    MeterFamilyTypeWmBusGatewayV1 = "MeterFamilyTypeWMBusGatewayV1"
,    MeterFamilyTypeSmartMe3PhaseTelstarTransformerMobile = "MeterFamilyTypeSmartMe3PhaseTelstarTransformerMobile"
,    MeterFamilyTypeMithralHallV1 = "MeterFamilyTypeMithralHallV1"
,    MeterFamilyTypeRestApiMeter = "MeterFamilyTypeRestApiMeter"
,    MeterFamilyTypeVirtualBillingMeter = "MeterFamilyTypeVirtualBillingMeter"
}

export enum DeviceMeterSubTypeEnum {
    MeterSubTypeUnknown = "MeterSubTypeUnknown"
,    MeterSubTypeCold = "MeterSubTypeCold"
,    MeterSubTypeHeat = "MeterSubTypeHeat"
,    MeterSubTypeChargingStation = "MeterSubTypeChargingStation"
,    MeterSubTypeElectricity = "MeterSubTypeElectricity"
,    MeterSubTypeWater = "MeterSubTypeWater"
,    MeterSubTypeGas = "MeterSubTypeGas"
,    MeterSubTypeElectricityHeat = "MeterSubTypeElectricityHeat"
,    MeterSubTypeTemperature = "MeterSubTypeTemperature"
,    MeterSubTypeVirtualBattery = "MeterSubTypeVirtualBattery"
}


// Device
/** 
 * Container Class for the Web API
**/
export class Device extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActivePower" })
  activePower?: number;

  @Metadata({ data: "json, name=ActivePowerL1" })
  activePowerL1?: number;

  @Metadata({ data: "json, name=ActivePowerL2" })
  activePowerL2?: number;

  @Metadata({ data: "json, name=ActivePowerL3" })
  activePowerL3?: number;

  @Metadata({ data: "json, name=ActivePowerUnit" })
  activePowerUnit?: string;

  @Metadata({ data: "json, name=ActiveTariff" })
  activeTariff?: number;

  @Metadata({ data: "json, name=AdditionalMeterSerialNumber" })
  additionalMeterSerialNumber?: string;

  @Metadata({ data: "json, name=AnalogOutput1" })
  analogOutput1?: number;

  @Metadata({ data: "json, name=AnalogOutput2" })
  analogOutput2?: number;

  @Metadata({ data: "json, name=ChargingStationState" })
  chargingStationState?: DeviceChargingStationStateEnum;

  @Metadata({ data: "json, name=CounterReading" })
  counterReading?: number;

  @Metadata({ data: "json, name=CounterReadingExport" })
  counterReadingExport?: number;

  @Metadata({ data: "json, name=CounterReadingImport" })
  counterReadingImport?: number;

  @Metadata({ data: "json, name=CounterReadingT1" })
  counterReadingT1?: number;

  @Metadata({ data: "json, name=CounterReadingT2" })
  counterReadingT2?: number;

  @Metadata({ data: "json, name=CounterReadingT3" })
  counterReadingT3?: number;

  @Metadata({ data: "json, name=CounterReadingT4" })
  counterReadingT4?: number;

  @Metadata({ data: "json, name=CounterReadingUnit" })
  counterReadingUnit?: string;

  @Metadata({ data: "json, name=Current" })
  current?: number;

  @Metadata({ data: "json, name=CurrentL1" })
  currentL1?: number;

  @Metadata({ data: "json, name=CurrentL2" })
  currentL2?: number;

  @Metadata({ data: "json, name=CurrentL3" })
  currentL3?: number;

  @Metadata({ data: "json, name=DeviceEnergyType" })
  deviceEnergyType?: DeviceDeviceEnergyTypeEnum;

  @Metadata({ data: "json, name=DigitalInput1" })
  digitalInput1?: boolean;

  @Metadata({ data: "json, name=DigitalInput2" })
  digitalInput2?: boolean;

  @Metadata({ data: "json, name=DigitalOutput1" })
  digitalOutput1?: boolean;

  @Metadata({ data: "json, name=DigitalOutput2" })
  digitalOutput2?: boolean;

  @Metadata({ data: "json, name=FamilyType" })
  familyType?: DeviceFamilyTypeEnum;

  @Metadata({ data: "json, name=FlowRate" })
  flowRate?: number;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=MeterSubType" })
  meterSubType?: DeviceMeterSubTypeEnum;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PowerFactor" })
  powerFactor?: number;

  @Metadata({ data: "json, name=PowerFactorL1" })
  powerFactorL1?: number;

  @Metadata({ data: "json, name=PowerFactorL2" })
  powerFactorL2?: number;

  @Metadata({ data: "json, name=PowerFactorL3" })
  powerFactorL3?: number;

  @Metadata({ data: "json, name=Serial" })
  serial?: number;

  @Metadata({ data: "json, name=SwitchOn" })
  switchOn?: boolean;

  @Metadata({ data: "json, name=SwitchPhaseL1On" })
  switchPhaseL1On?: boolean;

  @Metadata({ data: "json, name=SwitchPhaseL2On" })
  switchPhaseL2On?: boolean;

  @Metadata({ data: "json, name=SwitchPhaseL3On" })
  switchPhaseL3On?: boolean;

  @Metadata({ data: "json, name=Temperature" })
  temperature?: number;

  @Metadata({ data: "json, name=ValueDate" })
  valueDate?: Date;

  @Metadata({ data: "json, name=Voltage" })
  voltage?: number;

  @Metadata({ data: "json, name=VoltageL1" })
  voltageL1?: number;

  @Metadata({ data: "json, name=VoltageL2" })
  voltageL2?: number;

  @Metadata({ data: "json, name=VoltageL3" })
  voltageL3?: number;
}
