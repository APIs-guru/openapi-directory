import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchContentServerList: readonly ["https://content.twilio.com"];
export declare class FetchContentPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchContentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchContentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchContentPathParams;
    security: FetchContentSecurity;
}
export declare class FetchContentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    contentV1Content?: shared.ContentV1Content;
}
