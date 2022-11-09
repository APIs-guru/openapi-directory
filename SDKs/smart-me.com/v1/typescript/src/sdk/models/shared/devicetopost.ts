import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DeviceToPostDeviceEnergyTypeEnum {
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

export enum DeviceToPostMeterSubTypeEnum {
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


// DeviceToPost
/** 
 * Container Class for the Web API
**/
export class DeviceToPost extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActivePower, form, name=ActivePower;" })
  activePower?: number;

  @Metadata({ data: "json, name=CounterReading, form, name=CounterReading;" })
  counterReading?: number;

  @Metadata({ data: "json, name=CounterReadingExport, form, name=CounterReadingExport;" })
  counterReadingExport?: number;

  @Metadata({ data: "json, name=CounterReadingExportT1, form, name=CounterReadingExportT1;" })
  counterReadingExportT1?: number;

  @Metadata({ data: "json, name=CounterReadingExportT2, form, name=CounterReadingExportT2;" })
  counterReadingExportT2?: number;

  @Metadata({ data: "json, name=CounterReadingT1, form, name=CounterReadingT1;" })
  counterReadingT1?: number;

  @Metadata({ data: "json, name=CounterReadingT2, form, name=CounterReadingT2;" })
  counterReadingT2?: number;

  @Metadata({ data: "json, name=Current, form, name=Current;" })
  current?: number;

  @Metadata({ data: "json, name=CurrentL1, form, name=CurrentL1;" })
  currentL1?: number;

  @Metadata({ data: "json, name=CurrentL2, form, name=CurrentL2;" })
  currentL2?: number;

  @Metadata({ data: "json, name=CurrentL3, form, name=CurrentL3;" })
  currentL3?: number;

  @Metadata({ data: "json, name=DeviceEnergyType, form, name=DeviceEnergyType;" })
  deviceEnergyType?: DeviceToPostDeviceEnergyTypeEnum;

  @Metadata({ data: "json, name=DigitalInput1, form, name=DigitalInput1;" })
  digitalInput1?: boolean;

  @Metadata({ data: "json, name=Id, form, name=Id;" })
  id?: string;

  @Metadata({ data: "json, name=MeterSubType, form, name=MeterSubType;" })
  meterSubType?: DeviceToPostMeterSubTypeEnum;

  @Metadata({ data: "json, name=Name, form, name=Name;" })
  name?: string;

  @Metadata({ data: "json, name=PowerFactor, form, name=PowerFactor;" })
  powerFactor?: number;

  @Metadata({ data: "json, name=PowerFactorL1, form, name=PowerFactorL1;" })
  powerFactorL1?: number;

  @Metadata({ data: "json, name=PowerFactorL2, form, name=PowerFactorL2;" })
  powerFactorL2?: number;

  @Metadata({ data: "json, name=PowerFactorL3, form, name=PowerFactorL3;" })
  powerFactorL3?: number;

  @Metadata({ data: "json, name=Serial, form, name=Serial;" })
  serial?: number;

  @Metadata({ data: "json, name=Temperature, form, name=Temperature;" })
  temperature?: number;

  @Metadata({ data: "json, name=ValueDate, form, name=ValueDate;" })
  valueDate?: Date;

  @Metadata({ data: "json, name=Voltage, form, name=Voltage;" })
  voltage?: number;

  @Metadata({ data: "json, name=VoltageL1, form, name=VoltageL1;" })
  voltageL1?: number;

  @Metadata({ data: "json, name=VoltageL2, form, name=VoltageL2;" })
  voltageL2?: number;

  @Metadata({ data: "json, name=VoltageL3, form, name=VoltageL3;" })
  voltageL3?: number;
}
