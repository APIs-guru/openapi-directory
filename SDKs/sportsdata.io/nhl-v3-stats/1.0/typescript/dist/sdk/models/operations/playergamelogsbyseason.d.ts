import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PlayerGameLogsBySeasonFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerGameLogsBySeasonPathParams extends SpeakeasyBase {
    format: PlayerGameLogsBySeasonFormatEnum;
    numberofgames: string;
    playerid: string;
    season: string;
}
export declare class PlayerGameLogsBySeasonRequest extends SpeakeasyBase {
    pathParams: PlayerGameLogsBySeasonPathParams;
}
export declare class PlayerGameLogsBySeasonResponse extends SpeakeasyBase {
    contentType: string;
    playerGames?: any[];
    statusCode: number;
}
