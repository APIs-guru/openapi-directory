import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TeamSeasonStatsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class TeamSeasonStatsPathParams extends SpeakeasyBase {
    format: TeamSeasonStatsFormatEnum;
    season: string;
}
export declare class TeamSeasonStatsRequest extends SpeakeasyBase {
    pathParams: TeamSeasonStatsPathParams;
}
export declare class TeamSeasonStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamSeasons?: any[];
}
