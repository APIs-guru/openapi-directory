import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchBrandRegistrationsServerList: readonly ["https://messaging.twilio.com"];
export declare class FetchBrandRegistrationsPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchBrandRegistrationsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchBrandRegistrationsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchBrandRegistrationsPathParams;
    security: FetchBrandRegistrationsSecurity;
}
export declare class FetchBrandRegistrationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    messagingV1BrandRegistrations?: shared.MessagingV1BrandRegistrations;
}
