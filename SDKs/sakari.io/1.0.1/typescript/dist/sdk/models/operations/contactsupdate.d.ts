import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContactsUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    contactId: string;
}
export declare class ContactsUpdateSecurity extends SpeakeasyBase {
    sakariAuth: shared.SchemeSakariAuth;
}
export declare class ContactsUpdateRequest extends SpeakeasyBase {
    pathParams: ContactsUpdatePathParams;
    security: ContactsUpdateSecurity;
}
export declare class ContactsUpdateResponse extends SpeakeasyBase {
    contactResponse?: shared.ContactResponse;
    contentType: string;
    statusCode: number;
}
