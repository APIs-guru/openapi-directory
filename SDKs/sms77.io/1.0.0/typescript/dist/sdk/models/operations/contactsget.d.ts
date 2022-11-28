import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ContactsGetActionEnum {
    Read = "read"
}
export declare class ContactsGetQueryParams extends SpeakeasyBase {
    action: ContactsGetActionEnum;
    json?: number;
}
export declare class ContactsGetRequest extends SpeakeasyBase {
    queryParams: ContactsGetQueryParams;
}
export declare class ContactsGetResponse extends SpeakeasyBase {
    contactsGet200ApplicationJsonString?: string;
    contactsGet200TextCsvString?: string;
    contentType: string;
    statusCode: number;
}
