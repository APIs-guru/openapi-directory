import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHAPPLICATION_SERVERS: string[];
export declare class FetchApplicationPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class FetchApplicationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchApplicationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchApplicationPathParams;
    security: FetchApplicationSecurity;
}
export declare class FetchApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountApplication?: shared.ApiV2010AccountApplication;
}
