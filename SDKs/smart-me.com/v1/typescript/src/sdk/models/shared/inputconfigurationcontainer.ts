import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum InputConfigurationContainerTypeEnum {
    TariffInput = "TariffInput"
,    DigitalInput = "DigitalInput"
}


// InputConfigurationContainer
/** 
 * Configuration for the input of a meter (digital inputs)
**/
export class InputConfigurationContainer extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Number" })
  number?: number;

  @Metadata({ data: "json, name=OffText" })
  offText?: string;

  @Metadata({ data: "json, name=OnText" })
  onText?: string;

  @Metadata({ data: "json, name=Type" })
  type?: InputConfigurationContainerTypeEnum;
}
