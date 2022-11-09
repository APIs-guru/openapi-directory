import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PlayerSeasonStatsByTeamFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerSeasonStatsByTeamPathParams extends SpeakeasyBase {
    format: PlayerSeasonStatsByTeamFormatEnum;
    season: string;
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
