import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHINCOMINGPHONENUMBERASSIGNEDADDONEXTENSION_SERVERS: string[];
export declare class FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams extends SpeakeasyBase {
    accountSid: string;
    assignedAddOnSid: string;
    resourceSid: string;
    sid: string;
}
export declare class FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchIncomingPhoneNumberAssignedAddOnExtensionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams;
    security: FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity;
}
export declare class FetchIncomingPhoneNumberAssignedAddOnExtensionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension?: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension;
}
