import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlayersByTeamFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayersByTeamPathParams extends SpeakeasyBase {
    format: PlayersByTeamFormatEnum;
    team: string;
}
export declare class PlayersByTeamRequest extends SpeakeasyBase {
    pathParams: PlayersByTeamPathParams;
}
export declare class PlayersByTeamResponse extends SpeakeasyBase {
    contentType: string;
    players?: any[];
    statusCode: number;
}
