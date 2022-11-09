import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OutputInformationActionTypeEnum {
    OnOffAction = "OnOffAction"
,    AnalogAction = "AnalogAction"
}


// OutputInformation
/** 
 * Informations about the Outputs of a Meter or Folder
**/
export class OutputInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActionType" })
  actionType?: OutputInformationActionTypeEnum;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Number" })
  number?: number;

  @Metadata({ data: "json, name=ObisCode" })
  obisCode?: string;
}
