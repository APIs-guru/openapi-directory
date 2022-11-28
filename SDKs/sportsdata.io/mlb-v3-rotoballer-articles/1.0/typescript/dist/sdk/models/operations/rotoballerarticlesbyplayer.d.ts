import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RotoballerArticlesByPlayerFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class RotoballerArticlesByPlayerPathParams extends SpeakeasyBase {
    format: RotoballerArticlesByPlayerFormatEnum;
    playerid: string;
}
export declare class RotoballerArticlesByPlayerRequest extends SpeakeasyBase {
    pathParams: RotoballerArticlesByPlayerPathParams;
}
export declare class RotoballerArticlesByPlayerResponse extends SpeakeasyBase {
    articles?: any[];
    contentType: string;
    statusCode: number;
}
