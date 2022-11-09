import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PlayerSeasonAwayStatsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerSeasonAwayStatsPathParams extends SpeakeasyBase {
    format: PlayerSeasonAwayStatsFormatEnum;
    season: string;
}
export declare class PlayerSeasonAwayStatsRequest extends SpeakeasyBase {
    pathParams: PlayerSeasonAwayStatsPathParams;
}
export declare class PlayerSeasonAwayStatsResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasons?: any[];
    statusCode: number;
}
