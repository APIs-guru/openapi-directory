import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OutputInformationActionTypeEnum {
    OnOffAction = "OnOffAction",
    AnalogAction = "AnalogAction"
}
/**
 * Informations about the Outputs of a Meter or Folder
**/
export declare class OutputInformation extends SpeakeasyBase {
    actionType?: OutputInformationActionTypeEnum;
    name?: string;
    number?: number;
    obisCode?: string;
}
