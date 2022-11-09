import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEINCOMINGPHONENUMBERASSIGNEDADDON_SERVERS: string[];
export declare class DeleteIncomingPhoneNumberAssignedAddOnPathParams extends SpeakeasyBase {
    accountSid: string;
    resourceSid: string;
    sid: string;
}
export declare class DeleteIncomingPhoneNumberAssignedAddOnSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteIncomingPhoneNumberAssignedAddOnRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteIncomingPhoneNumberAssignedAddOnPathParams;
    security: DeleteIncomingPhoneNumberAssignedAddOnSecurity;
}
export declare class DeleteIncomingPhoneNumberAssignedAddOnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
