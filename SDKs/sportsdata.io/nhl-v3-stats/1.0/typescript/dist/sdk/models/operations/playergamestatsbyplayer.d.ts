import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PlayerGameStatsByPlayerFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerGameStatsByPlayerPathParams extends SpeakeasyBase {
    date: string;
    format: PlayerGameStatsByPlayerFormatEnum;
    playerid: string;
}
export declare class PlayerGameStatsByPlayerRequest extends SpeakeasyBase {
    pathParams: PlayerGameStatsByPlayerPathParams;
}
export declare class PlayerGameStatsByPlayerResponse extends SpeakeasyBase {
    contentType: string;
    playerGame?: any;
    statusCode: number;
}
