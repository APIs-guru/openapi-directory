import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHKEY_SERVERS: string[];
export declare class FetchKeyPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class FetchKeySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchKeyRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchKeyPathParams;
    security: FetchKeySecurity;
}
export declare class FetchKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountKey?: shared.ApiV2010AccountKey;
}
