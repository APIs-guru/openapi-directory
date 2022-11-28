import { SpeakeasyBase } from "../../../internal/utils";
import { Contact } from "./contact";
export declare class ContactsResponseError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare class ContactsResponsePagination extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    totalCount?: number;
}
export declare class ContactsResponse extends SpeakeasyBase {
    data?: Contact[];
    error?: ContactsResponseError;
    pagination?: ContactsResponsePagination;
    success?: boolean;
}
