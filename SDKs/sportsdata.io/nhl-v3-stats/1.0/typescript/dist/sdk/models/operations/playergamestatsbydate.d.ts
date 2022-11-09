import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PlayerGameStatsByDateFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerGameStatsByDatePathParams extends SpeakeasyBase {
    date: string;
    format: PlayerGameStatsByDateFormatEnum;
}
export declare class PlayerGameStatsByDateRequest extends SpeakeasyBase {
    pathParams: PlayerGameStatsByDatePathParams;
}
export declare class PlayerGameStatsByDateResponse extends SpeakeasyBase {
    contentType: string;
    playerGames?: any[];
    statusCode: number;
}
