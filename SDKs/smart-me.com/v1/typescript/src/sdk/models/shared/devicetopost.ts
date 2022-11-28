import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DeviceToPostDeviceEnergyTypeEnum {
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

export enum DeviceToPostMeterSubTypeEnum {
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


// DeviceToPost
/** 
 * Container Class for the Web API
**/
export class DeviceToPost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActivePower, form, name=ActivePower;" })
  activePower?: number;

  @SpeakeasyMetadata({ data: "json, name=CounterReading, form, name=CounterReading;" })
  counterReading?: number;

  @SpeakeasyMetadata({ data: "json, name=CounterReadingExport, form, name=CounterReadingExport;" })
  counterReadingExport?: number;

  @SpeakeasyMetadata({ data: "json, name=CounterReadingExportT1, form, name=CounterReadingExportT1;" })
  counterReadingExportT1?: number;

  @SpeakeasyMetadata({ data: "json, name=CounterReadingExportT2, form, name=CounterReadingExportT2;" })
  counterReadingExportT2?: number;

  @SpeakeasyMetadata({ data: "json, name=CounterReadingT1, form, name=CounterReadingT1;" })
  counterReadingT1?: number;

  @SpeakeasyMetadata({ data: "json, name=CounterReadingT2, form, name=CounterReadingT2;" })
  counterReadingT2?: number;

  @SpeakeasyMetadata({ data: "json, name=Current, form, name=Current;" })
  current?: number;

  @SpeakeasyMetadata({ data: "json, name=CurrentL1, form, name=CurrentL1;" })
  currentL1?: number;

  @SpeakeasyMetadata({ data: "json, name=CurrentL2, form, name=CurrentL2;" })
  currentL2?: number;

  @SpeakeasyMetadata({ data: "json, name=CurrentL3, form, name=CurrentL3;" })
  currentL3?: number;

  @SpeakeasyMetadata({ data: "json, name=DeviceEnergyType, form, name=DeviceEnergyType;" })
  deviceEnergyType?: DeviceToPostDeviceEnergyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=DigitalInput1, form, name=DigitalInput1;" })
  digitalInput1?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Id, form, name=Id;" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=MeterSubType, form, name=MeterSubType;" })
  meterSubType?: DeviceToPostMeterSubTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PowerFactor, form, name=PowerFactor;" })
  powerFactor?: number;

  @SpeakeasyMetadata({ data: "json, name=PowerFactorL1, form, name=PowerFactorL1;" })
  powerFactorL1?: number;

  @SpeakeasyMetadata({ data: "json, name=PowerFactorL2, form, name=PowerFactorL2;" })
  powerFactorL2?: number;

  @SpeakeasyMetadata({ data: "json, name=PowerFactorL3, form, name=PowerFactorL3;" })
  powerFactorL3?: number;

  @SpeakeasyMetadata({ data: "json, name=Serial, form, name=Serial;" })
  serial?: number;

  @SpeakeasyMetadata({ data: "json, name=Temperature, form, name=Temperature;" })
  temperature?: number;

  @SpeakeasyMetadata({ data: "json, name=ValueDate, form, name=ValueDate;" })
  valueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Voltage, form, name=Voltage;" })
  voltage?: number;

  @SpeakeasyMetadata({ data: "json, name=VoltageL1, form, name=VoltageL1;" })
  voltageL1?: number;

  @SpeakeasyMetadata({ data: "json, name=VoltageL2, form, name=VoltageL2;" })
  voltageL2?: number;

  @SpeakeasyMetadata({ data: "json, name=VoltageL3, form, name=VoltageL3;" })
  voltageL3?: number;
}
