import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum RotoballerArticlesFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class RotoballerArticlesPathParams extends SpeakeasyBase {
    format: RotoballerArticlesFormatEnum;
}
export declare class RotoballerArticlesRequest extends SpeakeasyBase {
    pathParams: RotoballerArticlesPathParams;
}
export declare class RotoballerArticlesResponse extends SpeakeasyBase {
    articles?: any[];
    contentType: string;
    statusCode: number;
}
