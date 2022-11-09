import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PlayerDetailsByTeamFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerDetailsByTeamPathParams extends SpeakeasyBase {
    format: PlayerDetailsByTeamFormatEnum;
    team: string;
}
export declare class PlayerDetailsByTeamRequest extends SpeakeasyBase {
    pathParams: PlayerDetailsByTeamPathParams;
}
export declare class PlayerDetailsByTeamResponse extends SpeakeasyBase {
    contentType: string;
    playerDetails?: any[];
    statusCode: number;
}
