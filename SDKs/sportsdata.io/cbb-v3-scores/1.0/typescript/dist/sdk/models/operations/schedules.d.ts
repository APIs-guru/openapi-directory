import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SchedulesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class SchedulesPathParams extends SpeakeasyBase {
    format: SchedulesFormatEnum;
    season: string;
}
export declare class SchedulesRequest extends SpeakeasyBase {
    pathParams: SchedulesPathParams;
}
export declare class SchedulesResponse extends SpeakeasyBase {
    contentType: string;
    games?: any[];
    statusCode: number;
}
