import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSelectedMultipleQueryParams extends SpeakeasyBase {
    headers?: Map<string, string>;
    js?: boolean;
    proxy?: shared.ProxyEnum;
    selectors?: string[];
    timeout?: number;
    url: string;
}
export declare class GetSelectedMultipleRequest extends SpeakeasyBase {
    queryParams: GetSelectedMultipleQueryParams;
}
export declare class GetSelectedMultipleResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    pageError?: shared.PageError;
    selectedAreas?: string[];
    statusCode: number;
}
