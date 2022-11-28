import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchDocsQueryParams extends SpeakeasyBase {
    search: string;
}
export declare class SearchDocsHeaders extends SpeakeasyBase {
    xReadmeVersion: string;
}
export declare class SearchDocsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class SearchDocsRequest extends SpeakeasyBase {
    queryParams: SearchDocsQueryParams;
    headers: SearchDocsHeaders;
    security: SearchDocsSecurity;
}
export declare class SearchDocsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
