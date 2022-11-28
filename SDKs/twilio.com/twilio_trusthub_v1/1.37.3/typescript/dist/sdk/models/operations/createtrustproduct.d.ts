import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateTrustProductServerList: readonly ["https://trusthub.twilio.com"];
export declare class CreateTrustProductCreateTrustProductRequest extends SpeakeasyBase {
    email: string;
    friendlyName: string;
    policySid: string;
    statusCallback?: string;
}
export declare class CreateTrustProductSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateTrustProductRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateTrustProductCreateTrustProductRequest;
    security: CreateTrustProductSecurity;
}
export declare class CreateTrustProductResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trusthubV1TrustProduct?: shared.TrusthubV1TrustProduct;
}
