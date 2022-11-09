import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PlayerSeasonStatsByPlayerFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerSeasonStatsByPlayerPathParams extends SpeakeasyBase {
    format: PlayerSeasonStatsByPlayerFormatEnum;
    playerid: string;
    season: string;
}
export declare class PlayerSeasonStatsByPlayerRequest extends SpeakeasyBase {
    pathParams: PlayerSeasonStatsByPlayerPathParams;
}
export declare class PlayerSeasonStatsByPlayerResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasons?: any[];
    statusCode: number;
}
