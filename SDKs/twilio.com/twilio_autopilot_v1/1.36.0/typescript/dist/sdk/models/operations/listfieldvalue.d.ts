import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTFIELDVALUE_SERVERS: string[];
export declare class ListFieldValuePathParams extends SpeakeasyBase {
    assistantSid: string;
    fieldTypeSid: string;
}
export declare class ListFieldValueQueryParams extends SpeakeasyBase {
    language?: string;
    pageSize?: number;
}
export declare class ListFieldValueSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListFieldValueRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListFieldValuePathParams;
    queryParams: ListFieldValueQueryParams;
    security: ListFieldValueSecurity;
}
export declare class ListFieldValueListFieldValueResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListFieldValueListFieldValueResponse extends SpeakeasyBase {
    fieldValues?: shared.AutopilotV1AssistantFieldTypeFieldValue[];
    meta?: ListFieldValueListFieldValueResponseMeta;
}
export declare class ListFieldValueResponse extends SpeakeasyBase {
    contentType: string;
    listFieldValueResponse?: ListFieldValueListFieldValueResponse;
    statusCode: number;
}
