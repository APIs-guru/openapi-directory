import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetQueryExtensionExtensionEnum {
    Atom = "atom",
    Rss = "rss",
    Html = "html",
    Json = "json"
}
export declare class GetQueryExtensionPathParams extends SpeakeasyBase {
    extension: GetQueryExtensionExtensionEnum;
}
export declare class GetQueryExtensionQueryParams extends SpeakeasyBase {
    count?: number;
    inUrlPrefixes?: string;
    q: string;
    start?: number;
    subdomains?: string;
}
export declare class GetQueryExtensionRequest extends SpeakeasyBase {
    pathParams: GetQueryExtensionPathParams;
    queryParams: GetQueryExtensionQueryParams;
}
export declare class GetQueryExtensionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
