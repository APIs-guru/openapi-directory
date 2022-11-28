import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlayerSeasonStatsWWorldGolfRankingsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerSeasonStatsWWorldGolfRankingsPathParams extends SpeakeasyBase {
    format: PlayerSeasonStatsWWorldGolfRankingsFormatEnum;
    season: string;
}
export declare class PlayerSeasonStatsWWorldGolfRankingsRequest extends SpeakeasyBase {
    pathParams: PlayerSeasonStatsWWorldGolfRankingsPathParams;
}
export declare class PlayerSeasonStatsWWorldGolfRankingsResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasons?: any[];
    statusCode: number;
}
