import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OutputConfigurationContainerDigitalOutputNoConnectionActionEnum {
    Nothing = "Nothing",
    TurnOff = "TurnOff",
    TurnOn = "TurnOn",
    SetPwmValue = "SetPwmValue"
}

export enum OutputConfigurationContainerS0PulseValueEnum {
    PulseValue1000Kwh = "PulseValue1000Kwh",
    PulseValue10000Kwh = "PulseValue10000Kwh"
}

export enum OutputConfigurationContainerTypeEnum {
    ImpulseOutputActiveEnergy = "ImpulseOutputActiveEnergy",
    ImpulseOutputActiveEnergyImport = "ImpulseOutputActiveEnergyImport",
    ImpulseOutputActiveEnergyExport = "ImpulseOutputActiveEnergyExport",
    ImpulseOutputReactiveEnergy = "ImpulseOutputReactiveEnergy",
    DigitalOutput = "DigitalOutput",
    AnalogPwmSignalOutput = "AnalogPwmSignalOutput",
    Disabled = "Disabled"
}


// OutputConfigurationContainer
/** 
 * Configuration for the outputs of a meter (analog/digital outputs)
**/
export class OutputConfigurationContainer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DigitalOutputNoConnectionAction" })
  digitalOutputNoConnectionAction?: OutputConfigurationContainerDigitalOutputNoConnectionActionEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Number" })
  number?: number;

  @SpeakeasyMetadata({ data: "json, name=S0PulseValue" })
  s0PulseValue?: OutputConfigurationContainerS0PulseValueEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: OutputConfigurationContainerTypeEnum;
}
