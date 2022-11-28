import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ContactsPostActionEnum {
    Del = "del",
    Write = "write"
}
export declare class ContactsPostQueryParams extends SpeakeasyBase {
    action: ContactsPostActionEnum;
    email?: string;
    empfaenger?: string;
    id?: string;
    json?: number;
    nick?: string;
}
export declare class ContactsPostRequest extends SpeakeasyBase {
    queryParams: ContactsPostQueryParams;
}
export declare class ContactsPostResponse extends SpeakeasyBase {
    contactsPost200ApplicationJsonString?: string;
    contactsPost200TextPlainString?: string;
    contentType: string;
    statusCode: number;
}
