import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListIncomingPhoneNumberAssignedAddOnExtensionServerList: readonly ["https://api.twilio.com"];
export declare class ListIncomingPhoneNumberAssignedAddOnExtensionPathParams extends SpeakeasyBase {
    accountSid: string;
    assignedAddOnSid: string;
    resourceSid: string;
}
export declare class ListIncomingPhoneNumberAssignedAddOnExtensionQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListIncomingPhoneNumberAssignedAddOnExtensionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListIncomingPhoneNumberAssignedAddOnExtensionListIncomingPhoneNumberAssignedAddOnExtensionResponse extends SpeakeasyBase {
    end?: number;
    extensions?: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension[];
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListIncomingPhoneNumberAssignedAddOnExtensionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListIncomingPhoneNumberAssignedAddOnExtensionPathParams;
    queryParams: ListIncomingPhoneNumberAssignedAddOnExtensionQueryParams;
    security: ListIncomingPhoneNumberAssignedAddOnExtensionSecurity;
}
export declare class ListIncomingPhoneNumberAssignedAddOnExtensionResponse extends SpeakeasyBase {
    contentType: string;
    listIncomingPhoneNumberAssignedAddOnExtensionResponse?: ListIncomingPhoneNumberAssignedAddOnExtensionListIncomingPhoneNumberAssignedAddOnExtensionResponse;
    statusCode: number;
}
