import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PlayerSeasonHomeStatsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerSeasonHomeStatsPathParams extends SpeakeasyBase {
    format: PlayerSeasonHomeStatsFormatEnum;
    season: string;
}
export declare class PlayerSeasonHomeStatsRequest extends SpeakeasyBase {
    pathParams: PlayerSeasonHomeStatsPathParams;
}
export declare class PlayerSeasonHomeStatsResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasons?: any[];
    statusCode: number;
}
