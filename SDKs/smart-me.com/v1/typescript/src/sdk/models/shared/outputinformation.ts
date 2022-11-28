import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OutputInformationActionTypeEnum {
    OnOffAction = "OnOffAction",
    AnalogAction = "AnalogAction"
}


// OutputInformation
/** 
 * Informations about the Outputs of a Meter or Folder
**/
export class OutputInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActionType" })
  actionType?: OutputInformationActionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Number" })
  number?: number;

  @SpeakeasyMetadata({ data: "json, name=ObisCode" })
  obisCode?: string;
}
