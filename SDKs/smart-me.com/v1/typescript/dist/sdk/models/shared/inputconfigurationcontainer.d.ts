import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InputConfigurationContainerTypeEnum {
    TariffInput = "TariffInput",
    DigitalInput = "DigitalInput"
}
/**
 * Configuration for the input of a meter (digital inputs)
**/
export declare class InputConfigurationContainer extends SpeakeasyBase {
    name?: string;
    number?: number;
    offText?: string;
    onText?: string;
    type?: InputConfigurationContainerTypeEnum;
}
