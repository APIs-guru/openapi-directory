import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlayerFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class PlayerPathParams extends SpeakeasyBase {
    format: PlayerFormatEnum;
    playerid: string;
}
export declare class PlayerRequest extends SpeakeasyBase {
    pathParams: PlayerPathParams;
}
export declare class PlayerResponse extends SpeakeasyBase {
    contentType: string;
    player?: any;
    statusCode: number;
}
