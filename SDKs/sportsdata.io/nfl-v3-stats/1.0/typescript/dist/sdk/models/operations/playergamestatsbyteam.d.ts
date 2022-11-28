import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlayerGameStatsByTeamFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerGameStatsByTeamPathParams extends SpeakeasyBase {
    format: PlayerGameStatsByTeamFormatEnum;
    season: string;
    team: string;
    week: string;
}
export declare class PlayerGameStatsByTeamRequest extends SpeakeasyBase {
    pathParams: PlayerGameStatsByTeamPathParams;
}
export declare class PlayerGameStatsByTeamResponse extends SpeakeasyBase {
    contentType: string;
    playerGames?: any[];
    statusCode: number;
}
