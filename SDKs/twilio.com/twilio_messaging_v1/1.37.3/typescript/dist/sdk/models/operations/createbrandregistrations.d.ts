import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateBrandRegistrationsServerList: readonly ["https://messaging.twilio.com"];
export declare class CreateBrandRegistrationsCreateBrandRegistrationsRequest extends SpeakeasyBase {
    a2PProfileBundleSid: string;
    brandType?: string;
    customerProfileBundleSid: string;
    mock?: boolean;
    skipAutomaticSecVet?: boolean;
}
export declare class CreateBrandRegistrationsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateBrandRegistrationsRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateBrandRegistrationsCreateBrandRegistrationsRequest;
    security: CreateBrandRegistrationsSecurity;
}
export declare class CreateBrandRegistrationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    messagingV1BrandRegistrations?: shared.MessagingV1BrandRegistrations;
}
