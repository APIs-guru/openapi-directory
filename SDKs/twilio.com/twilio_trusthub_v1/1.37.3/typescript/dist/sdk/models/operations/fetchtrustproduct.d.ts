import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchTrustProductServerList: readonly ["https://trusthub.twilio.com"];
export declare class FetchTrustProductPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchTrustProductSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchTrustProductRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchTrustProductPathParams;
    security: FetchTrustProductSecurity;
}
export declare class FetchTrustProductResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trusthubV1TrustProduct?: shared.TrusthubV1TrustProduct;
}
