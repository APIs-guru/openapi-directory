import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchPoliciesServerList: readonly ["https://trusthub.twilio.com"];
export declare class FetchPoliciesPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchPoliciesSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchPoliciesRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchPoliciesPathParams;
    security: FetchPoliciesSecurity;
}
export declare class FetchPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trusthubV1Policies?: shared.TrusthubV1Policies;
}
