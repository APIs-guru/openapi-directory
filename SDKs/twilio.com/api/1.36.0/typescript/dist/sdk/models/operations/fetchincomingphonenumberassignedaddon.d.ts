import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHINCOMINGPHONENUMBERASSIGNEDADDON_SERVERS: string[];
export declare class FetchIncomingPhoneNumberAssignedAddOnPathParams extends SpeakeasyBase {
    accountSid: string;
    resourceSid: string;
    sid: string;
}
export declare class FetchIncomingPhoneNumberAssignedAddOnSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchIncomingPhoneNumberAssignedAddOnRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchIncomingPhoneNumberAssignedAddOnPathParams;
    security: FetchIncomingPhoneNumberAssignedAddOnSecurity;
}
export declare class FetchIncomingPhoneNumberAssignedAddOnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn?: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn;
}
