import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStatusHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetStatusSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetStatusRequest extends SpeakeasyBase {
    headers: GetStatusHeaders;
    security: GetStatusSecurity;
}
export declare class GetStatusResponse extends SpeakeasyBase {
    apiStatus?: shared.ApiStatus;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
