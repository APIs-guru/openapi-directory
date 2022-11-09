import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ScheduleBySeasonFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ScheduleBySeasonPathParams extends SpeakeasyBase {
    format: ScheduleBySeasonFormatEnum;
    season: string;
}
export declare class ScheduleBySeasonRequest extends SpeakeasyBase {
    pathParams: ScheduleBySeasonPathParams;
}
export declare class ScheduleBySeasonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tournaments?: any[];
}
