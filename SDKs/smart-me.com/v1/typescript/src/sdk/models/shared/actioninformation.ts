import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ActionInformationActionTypeEnum {
    OnOffAction = "OnOffAction",
    AnalogAction = "AnalogAction"
}


// ActionInformation
/** 
 * The Information about an Action of a device
**/
export class ActionInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActionType" })
  actionType?: ActionInformationActionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=MaxValue" })
  maxValue?: number;

  @SpeakeasyMetadata({ data: "json, name=MinValue" })
  minValue?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ObisCode" })
  obisCode?: string;
}
