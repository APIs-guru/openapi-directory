import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ActionInformationActionTypeEnum {
    OnOffAction = "OnOffAction"
,    AnalogAction = "AnalogAction"
}


// ActionInformation
/** 
 * The Information about an Action of a device
**/
export class ActionInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActionType" })
  actionType?: ActionInformationActionTypeEnum;

  @Metadata({ data: "json, name=MaxValue" })
  maxValue?: number;

  @Metadata({ data: "json, name=MinValue" })
  minValue?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ObisCode" })
  obisCode?: string;
}
