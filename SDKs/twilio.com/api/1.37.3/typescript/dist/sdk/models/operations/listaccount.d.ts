import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListAccountServerList: readonly ["https://api.twilio.com"];
export declare class ListAccountQueryParams extends SpeakeasyBase {
    friendlyName?: string;
    pageSize?: number;
    status?: shared.AccountEnumStatusEnum;
}
export declare class ListAccountSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListAccountListAccountResponse extends SpeakeasyBase {
    accounts?: shared.ApiV2010Account[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListAccountRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListAccountQueryParams;
    security: ListAccountSecurity;
}
export declare class ListAccountResponse extends SpeakeasyBase {
    contentType: string;
    listAccountResponse?: ListAccountListAccountResponse;
    statusCode: number;
}
