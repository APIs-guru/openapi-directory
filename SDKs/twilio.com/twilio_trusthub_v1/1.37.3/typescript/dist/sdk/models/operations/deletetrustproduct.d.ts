import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteTrustProductServerList: readonly ["https://trusthub.twilio.com"];
export declare class DeleteTrustProductPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteTrustProductSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteTrustProductRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteTrustProductPathParams;
    security: DeleteTrustProductSecurity;
}
export declare class DeleteTrustProductResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
