import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ScheduleFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class SchedulePathParams extends SpeakeasyBase {
    format: ScheduleFormatEnum;
    season: string;
}
export declare class ScheduleRequest extends SpeakeasyBase {
    pathParams: SchedulePathParams;
}
export declare class ScheduleResponse extends SpeakeasyBase {
    contentType: string;
    schedules?: any[];
    statusCode: number;
}
