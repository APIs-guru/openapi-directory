import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateCustomerProfileServerList: readonly ["https://trusthub.twilio.com"];
export declare class CreateCustomerProfileCreateCustomerProfileRequest extends SpeakeasyBase {
    email: string;
    friendlyName: string;
    policySid: string;
    statusCallback?: string;
}
export declare class CreateCustomerProfileSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateCustomerProfileRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateCustomerProfileCreateCustomerProfileRequest;
    security: CreateCustomerProfileSecurity;
}
export declare class CreateCustomerProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trusthubV1CustomerProfile?: shared.TrusthubV1CustomerProfile;
}
