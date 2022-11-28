import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TimeframesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare enum TimeframesTypeEnum {
    Current = "current",
    Upcoming = "upcoming",
    Completed = "completed",
    Recent = "recent",
    All = "all"
}
export declare class TimeframesPathParams extends SpeakeasyBase {
    format: TimeframesFormatEnum;
    type: TimeframesTypeEnum;
}
export declare class TimeframesRequest extends SpeakeasyBase {
    pathParams: TimeframesPathParams;
}
export declare class TimeframesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    timeframes?: any[];
}
