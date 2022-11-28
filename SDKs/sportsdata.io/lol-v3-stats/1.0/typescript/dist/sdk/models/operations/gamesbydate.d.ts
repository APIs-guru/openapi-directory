import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GamesByDateFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class GamesByDatePathParams extends SpeakeasyBase {
    date: string;
    format: GamesByDateFormatEnum;
}
export declare class GamesByDateRequest extends SpeakeasyBase {
    pathParams: GamesByDatePathParams;
}
export declare class GamesByDateResponse extends SpeakeasyBase {
    contentType: string;
    games?: any[];
    statusCode: number;
}
