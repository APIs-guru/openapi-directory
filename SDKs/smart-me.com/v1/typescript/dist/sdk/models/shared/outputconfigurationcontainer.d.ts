import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OutputConfigurationContainerDigitalOutputNoConnectionActionEnum {
    Nothing = "Nothing",
    TurnOff = "TurnOff",
    TurnOn = "TurnOn",
    SetPwmValue = "SetPwmValue"
}
export declare enum OutputConfigurationContainerS0PulseValueEnum {
    PulseValue1000Kwh = "PulseValue1000Kwh",
    PulseValue10000Kwh = "PulseValue10000Kwh"
}
export declare enum OutputConfigurationContainerTypeEnum {
    ImpulseOutputActiveEnergy = "ImpulseOutputActiveEnergy",
    ImpulseOutputActiveEnergyImport = "ImpulseOutputActiveEnergyImport",
    ImpulseOutputActiveEnergyExport = "ImpulseOutputActiveEnergyExport",
    ImpulseOutputReactiveEnergy = "ImpulseOutputReactiveEnergy",
    DigitalOutput = "DigitalOutput",
    AnalogPwmSignalOutput = "AnalogPwmSignalOutput",
    Disabled = "Disabled"
}
/**
 * Configuration for the outputs of a meter (analog/digital outputs)
**/
export declare class OutputConfigurationContainer extends SpeakeasyBase {
    digitalOutputNoConnectionAction?: OutputConfigurationContainerDigitalOutputNoConnectionActionEnum;
    name?: string;
    number?: number;
    s0PulseValue?: OutputConfigurationContainerS0PulseValueEnum;
    type?: OutputConfigurationContainerTypeEnum;
}
