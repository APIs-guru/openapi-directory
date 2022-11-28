import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContactsRemovePathParams extends SpeakeasyBase {
    accountId: string;
    contactId: string;
}
export declare class ContactsRemoveSecurity extends SpeakeasyBase {
    sakariAuth: shared.SchemeSakariAuth;
}
export declare class ContactsRemove200ApplicationJson extends SpeakeasyBase {
    success?: boolean;
}
export declare class ContactsRemoveRequest extends SpeakeasyBase {
    pathParams: ContactsRemovePathParams;
    security: ContactsRemoveSecurity;
}
export declare class ContactsRemoveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    contactsRemove200ApplicationJsonObject?: ContactsRemove200ApplicationJson;
}
