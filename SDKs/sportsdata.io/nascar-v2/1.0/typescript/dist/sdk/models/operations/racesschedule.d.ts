import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RacesScheduleFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class RacesSchedulePathParams extends SpeakeasyBase {
    format: RacesScheduleFormatEnum;
    season: string;
}
export declare class RacesScheduleRequest extends SpeakeasyBase {
    pathParams: RacesSchedulePathParams;
}
export declare class RacesScheduleResponse extends SpeakeasyBase {
    contentType: string;
    races?: any[];
    statusCode: number;
}
