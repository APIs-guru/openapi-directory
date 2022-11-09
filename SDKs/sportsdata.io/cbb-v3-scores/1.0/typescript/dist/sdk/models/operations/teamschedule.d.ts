import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum TeamScheduleFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class TeamSchedulePathParams extends SpeakeasyBase {
    format: TeamScheduleFormatEnum;
    season: string;
    team: string;
}
export declare class TeamScheduleRequest extends SpeakeasyBase {
    pathParams: TeamSchedulePathParams;
}
export declare class TeamScheduleResponse extends SpeakeasyBase {
    contentType: string;
    games?: any[];
    statusCode: number;
}
