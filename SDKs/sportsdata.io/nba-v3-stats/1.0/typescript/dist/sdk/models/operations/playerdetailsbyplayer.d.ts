import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PlayerDetailsByPlayerFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerDetailsByPlayerPathParams extends SpeakeasyBase {
    format: PlayerDetailsByPlayerFormatEnum;
    playerid: string;
}
export declare class PlayerDetailsByPlayerRequest extends SpeakeasyBase {
    pathParams: PlayerDetailsByPlayerPathParams;
}
export declare class PlayerDetailsByPlayerResponse extends SpeakeasyBase {
    contentType: string;
    player?: any;
    statusCode: number;
}
