import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchBundleServerList: readonly ["https://numbers.twilio.com"];
export declare class FetchBundlePathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchBundleSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchBundleRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchBundlePathParams;
    security: FetchBundleSecurity;
}
export declare class FetchBundleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    numbersV2RegulatoryComplianceBundle?: shared.NumbersV2RegulatoryComplianceBundle;
}
