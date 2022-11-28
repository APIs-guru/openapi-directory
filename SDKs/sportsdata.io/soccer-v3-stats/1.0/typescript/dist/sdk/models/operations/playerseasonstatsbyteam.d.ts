import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlayerSeasonStatsByTeamFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class PlayerSeasonStatsByTeamPathParams extends SpeakeasyBase {
    format: PlayerSeasonStatsByTeamFormatEnum;
    roundid: string;
    team: string;
}
export declare class PlayerSeasonStatsByTeamRequest extends SpeakeasyBase {
    pathParams: PlayerSeasonStatsByTeamPathParams;
}
export declare class PlayerSeasonStatsByTeamResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasons?: any[];
    statusCode: number;
}
