import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UpcomingScheduleByPlayerFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class UpcomingScheduleByPlayerPathParams extends SpeakeasyBase {
    format: UpcomingScheduleByPlayerFormatEnum;
    playerid: string;
}
export declare class UpcomingScheduleByPlayerRequest extends SpeakeasyBase {
    pathParams: UpcomingScheduleByPlayerPathParams;
}
export declare class UpcomingScheduleByPlayerResponse extends SpeakeasyBase {
    contentType: string;
    games?: any[];
    statusCode: number;
}
