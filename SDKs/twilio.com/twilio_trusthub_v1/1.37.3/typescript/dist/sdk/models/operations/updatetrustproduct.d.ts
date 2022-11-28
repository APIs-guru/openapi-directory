import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateTrustProductServerList: readonly ["https://trusthub.twilio.com"];
export declare class UpdateTrustProductPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateTrustProductUpdateTrustProductRequest extends SpeakeasyBase {
    email?: string;
    friendlyName?: string;
    status?: shared.TrustProductEnumStatusEnum;
    statusCallback?: string;
}
export declare class UpdateTrustProductSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateTrustProductRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateTrustProductPathParams;
    request?: UpdateTrustProductUpdateTrustProductRequest;
    security: UpdateTrustProductSecurity;
}
export declare class UpdateTrustProductResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trusthubV1TrustProduct?: shared.TrusthubV1TrustProduct;
}
