import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum TeamGameStatsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class TeamGameStatsPathParams extends SpeakeasyBase {
    format: TeamGameStatsFormatEnum;
    season: string;
    week: string;
}
export declare class TeamGameStatsRequest extends SpeakeasyBase {
    pathParams: TeamGameStatsPathParams;
}
export declare class TeamGameStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamGames?: any[];
}
