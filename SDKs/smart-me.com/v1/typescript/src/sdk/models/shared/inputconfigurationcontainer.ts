import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum InputConfigurationContainerTypeEnum {
    TariffInput = "TariffInput",
    DigitalInput = "DigitalInput"
}


// InputConfigurationContainer
/** 
 * Configuration for the input of a meter (digital inputs)
**/
export class InputConfigurationContainer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Number" })
  number?: number;

  @SpeakeasyMetadata({ data: "json, name=OffText" })
  offText?: string;

  @SpeakeasyMetadata({ data: "json, name=OnText" })
  onText?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: InputConfigurationContainerTypeEnum;
}
