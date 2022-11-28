import { SpeakeasyBase } from "../../../internal/utils";
export declare class TimeOffTypeResourceAttributes extends SpeakeasyBase {
    name?: string;
}
export declare enum TimeOffTypeResourceTypeEnum {
    TimeOffType = "TimeOffType"
}
export declare class TimeOffTypeResource extends SpeakeasyBase {
    attributes?: TimeOffTypeResourceAttributes;
    id?: number;
    type?: TimeOffTypeResourceTypeEnum;
}
