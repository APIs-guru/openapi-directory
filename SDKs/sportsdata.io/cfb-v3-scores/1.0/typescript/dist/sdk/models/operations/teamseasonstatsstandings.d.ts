import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum TeamSeasonStatsStandingsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class TeamSeasonStatsStandingsPathParams extends SpeakeasyBase {
    format: TeamSeasonStatsStandingsFormatEnum;
    season: string;
}
export declare class TeamSeasonStatsStandingsRequest extends SpeakeasyBase {
    pathParams: TeamSeasonStatsStandingsPathParams;
}
export declare class TeamSeasonStatsStandingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamSeasons?: any[];
}
