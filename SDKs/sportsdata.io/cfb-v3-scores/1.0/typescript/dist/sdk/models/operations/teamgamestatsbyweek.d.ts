import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TeamGameStatsByWeekFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class TeamGameStatsByWeekPathParams extends SpeakeasyBase {
    format: TeamGameStatsByWeekFormatEnum;
    season: string;
    week: string;
}
export declare class TeamGameStatsByWeekRequest extends SpeakeasyBase {
    pathParams: TeamGameStatsByWeekPathParams;
}
export declare class TeamGameStatsByWeekResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamGames?: any[];
}
