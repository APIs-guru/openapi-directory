import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ActionInformationActionTypeEnum {
    OnOffAction = "OnOffAction",
    AnalogAction = "AnalogAction"
}
/**
 * The Information about an Action of a device
**/
export declare class ActionInformation extends SpeakeasyBase {
    actionType?: ActionInformationActionTypeEnum;
    maxValue?: number;
    minValue?: number;
    name?: string;
    obisCode?: string;
}
