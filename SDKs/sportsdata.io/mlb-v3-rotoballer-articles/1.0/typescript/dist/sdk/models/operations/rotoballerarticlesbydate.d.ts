import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RotoballerArticlesByDateFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class RotoballerArticlesByDatePathParams extends SpeakeasyBase {
    date: string;
    format: RotoballerArticlesByDateFormatEnum;
}
export declare class RotoballerArticlesByDateRequest extends SpeakeasyBase {
    pathParams: RotoballerArticlesByDatePathParams;
}
export declare class RotoballerArticlesByDateResponse extends SpeakeasyBase {
    articles?: any[];
    contentType: string;
    statusCode: number;
}
