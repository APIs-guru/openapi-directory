import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContactsFetchAllPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class ContactsFetchAllQueryParams extends SpeakeasyBase {
    email?: string;
    firstName?: string;
    lastName?: string;
    limit?: number;
    mobile?: string;
    offset?: number;
    tags?: string;
}
export declare class ContactsFetchAllSecurity extends SpeakeasyBase {
    sakariAuth: shared.SchemeSakariAuth;
}
export declare class ContactsFetchAllRequest extends SpeakeasyBase {
    pathParams: ContactsFetchAllPathParams;
    queryParams: ContactsFetchAllQueryParams;
    security: ContactsFetchAllSecurity;
}
export declare class ContactsFetchAllResponse extends SpeakeasyBase {
    contactsResponse?: shared.ContactsResponse;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
