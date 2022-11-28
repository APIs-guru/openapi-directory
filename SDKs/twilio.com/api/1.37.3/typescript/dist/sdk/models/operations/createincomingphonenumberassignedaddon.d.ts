import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateIncomingPhoneNumberAssignedAddOnServerList: readonly ["https://api.twilio.com"];
export declare class CreateIncomingPhoneNumberAssignedAddOnPathParams extends SpeakeasyBase {
    accountSid: string;
    resourceSid: string;
}
export declare class CreateIncomingPhoneNumberAssignedAddOnCreateIncomingPhoneNumberAssignedAddOnRequest extends SpeakeasyBase {
    installedAddOnSid: string;
}
export declare class CreateIncomingPhoneNumberAssignedAddOnSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateIncomingPhoneNumberAssignedAddOnRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateIncomingPhoneNumberAssignedAddOnPathParams;
    request?: CreateIncomingPhoneNumberAssignedAddOnCreateIncomingPhoneNumberAssignedAddOnRequest;
    security: CreateIncomingPhoneNumberAssignedAddOnSecurity;
}
export declare class CreateIncomingPhoneNumberAssignedAddOnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn?: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn;
}
