import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateCustomerProfileServerList: readonly ["https://trusthub.twilio.com"];
export declare class UpdateCustomerProfilePathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateCustomerProfileUpdateCustomerProfileRequest extends SpeakeasyBase {
    email?: string;
    friendlyName?: string;
    status?: shared.CustomerProfileEnumStatusEnum;
    statusCallback?: string;
}
export declare class UpdateCustomerProfileSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateCustomerProfileRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateCustomerProfilePathParams;
    request?: UpdateCustomerProfileUpdateCustomerProfileRequest;
    security: UpdateCustomerProfileSecurity;
}
export declare class UpdateCustomerProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trusthubV1CustomerProfile?: shared.TrusthubV1CustomerProfile;
}
