import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListDependentPhoneNumberServerList: readonly ["https://api.twilio.com"];
export declare class ListDependentPhoneNumberPathParams extends SpeakeasyBase {
    accountSid: string;
    addressSid: string;
}
export declare class ListDependentPhoneNumberQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListDependentPhoneNumberSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListDependentPhoneNumberListDependentPhoneNumberResponse extends SpeakeasyBase {
    dependentPhoneNumbers?: shared.ApiV2010AccountAddressDependentPhoneNumber[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListDependentPhoneNumberRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListDependentPhoneNumberPathParams;
    queryParams: ListDependentPhoneNumberQueryParams;
    security: ListDependentPhoneNumberSecurity;
}
export declare class ListDependentPhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    listDependentPhoneNumberResponse?: ListDependentPhoneNumberListDependentPhoneNumberResponse;
    statusCode: number;
}
