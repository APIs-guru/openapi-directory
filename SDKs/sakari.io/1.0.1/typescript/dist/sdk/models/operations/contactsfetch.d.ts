import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContactsFetchPathParams extends SpeakeasyBase {
    accountId: string;
    contactId: string;
}
export declare class ContactsFetchSecurity extends SpeakeasyBase {
    sakariAuth: shared.SchemeSakariAuth;
}
export declare class ContactsFetchRequest extends SpeakeasyBase {
    pathParams: ContactsFetchPathParams;
    security: ContactsFetchSecurity;
}
export declare class ContactsFetchResponse extends SpeakeasyBase {
    contactResponse?: shared.ContactResponse;
    contentType: string;
    statusCode: number;
}
