import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ScheduleFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class SchedulePathParams extends SpeakeasyBase {
    format: ScheduleFormatEnum;
    roundid: string;
}
export declare class ScheduleRequest extends SpeakeasyBase {
    pathParams: SchedulePathParams;
}
export declare class ScheduleResponse extends SpeakeasyBase {
    contentType: string;
    games?: any[];
    statusCode: number;
}
