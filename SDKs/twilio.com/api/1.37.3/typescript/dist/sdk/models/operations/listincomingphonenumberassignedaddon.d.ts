import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListIncomingPhoneNumberAssignedAddOnServerList: readonly ["https://api.twilio.com"];
export declare class ListIncomingPhoneNumberAssignedAddOnPathParams extends SpeakeasyBase {
    accountSid: string;
    resourceSid: string;
}
export declare class ListIncomingPhoneNumberAssignedAddOnQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListIncomingPhoneNumberAssignedAddOnSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse extends SpeakeasyBase {
    assignedAddOns?: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListIncomingPhoneNumberAssignedAddOnRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListIncomingPhoneNumberAssignedAddOnPathParams;
    queryParams: ListIncomingPhoneNumberAssignedAddOnQueryParams;
    security: ListIncomingPhoneNumberAssignedAddOnSecurity;
}
export declare class ListIncomingPhoneNumberAssignedAddOnResponse extends SpeakeasyBase {
    contentType: string;
    listIncomingPhoneNumberAssignedAddOnResponse?: ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse;
    statusCode: number;
}
