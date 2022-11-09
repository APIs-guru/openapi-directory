import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PlayerSeasonStatsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerSeasonStatsPathParams extends SpeakeasyBase {
    format: PlayerSeasonStatsFormatEnum;
    season: string;
}
export declare class PlayerSeasonStatsRequest extends SpeakeasyBase {
    pathParams: PlayerSeasonStatsPathParams;
}
export declare class PlayerSeasonStatsResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasons?: any[];
    statusCode: number;
}
