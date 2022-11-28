import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlayerSeasonStatsFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class PlayerSeasonStatsPathParams extends SpeakeasyBase {
    format: PlayerSeasonStatsFormatEnum;
    roundid: string;
}
export declare class PlayerSeasonStatsRequest extends SpeakeasyBase {
    pathParams: PlayerSeasonStatsPathParams;
}
export declare class PlayerSeasonStatsResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasons?: any[];
    statusCode: number;
}
