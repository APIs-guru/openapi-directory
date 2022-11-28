import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContactsCreatePathParams extends SpeakeasyBase {
    accountId: string;
}
export declare enum ContactsCreateMergeStrategyEnum {
    Append = "append",
    Core = "core",
    Remove = "remove"
}
export declare class ContactsCreateQueryParams extends SpeakeasyBase {
    mergeStrategy?: ContactsCreateMergeStrategyEnum;
}
export declare class ContactsCreateRequests extends SpeakeasyBase {
    contactRequest?: shared.ContactRequest;
    string?: string;
}
export declare class ContactsCreateSecurity extends SpeakeasyBase {
    sakariAuth: shared.SchemeSakariAuth;
}
export declare class ContactsCreateRequest extends SpeakeasyBase {
    pathParams: ContactsCreatePathParams;
    queryParams: ContactsCreateQueryParams;
    request?: ContactsCreateRequests;
    security: ContactsCreateSecurity;
}
export declare class ContactsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    contactsCreate201ApplicationJsonOneOf?: any;
}
