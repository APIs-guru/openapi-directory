import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PlayersByTeamFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class PlayersByTeamPathParams extends SpeakeasyBase {
    format: PlayersByTeamFormatEnum;
    teamid: string;
}
export declare class PlayersByTeamRequest extends SpeakeasyBase {
    pathParams: PlayersByTeamPathParams;
}
export declare class PlayersByTeamResponse extends SpeakeasyBase {
    contentType: string;
    players?: any[];
    statusCode: number;
}
