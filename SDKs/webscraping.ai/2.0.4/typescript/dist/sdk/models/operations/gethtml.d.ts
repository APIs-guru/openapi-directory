import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetHtmlQueryParams extends SpeakeasyBase {
    headers?: Map<string, string>;
    js?: boolean;
    proxy?: shared.ProxyEnum;
    timeout?: number;
    url: string;
}
export declare class GetHtmlRequest extends SpeakeasyBase {
    queryParams: GetHtmlQueryParams;
}
export declare class GetHtmlResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    pageError?: shared.PageError;
    statusCode: number;
    getHtml200TextHtmlString?: string;
}
