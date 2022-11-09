import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTUNDERSTANDFIELDVALUE_SERVERS: string[];
export declare class ListUnderstandFieldValuePathParams extends SpeakeasyBase {
    assistantSid: string;
    fieldTypeSid: string;
}
export declare class ListUnderstandFieldValueQueryParams extends SpeakeasyBase {
    language?: string;
    pageSize?: number;
}
export declare class ListUnderstandFieldValueSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListUnderstandFieldValueRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListUnderstandFieldValuePathParams;
    queryParams: ListUnderstandFieldValueQueryParams;
    security: ListUnderstandFieldValueSecurity;
}
export declare class ListUnderstandFieldValueListUnderstandFieldValueResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListUnderstandFieldValueListUnderstandFieldValueResponse extends SpeakeasyBase {
    fieldValues?: shared.PreviewUnderstandAssistantFieldTypeFieldValue[];
    meta?: ListUnderstandFieldValueListUnderstandFieldValueResponseMeta;
}
export declare class ListUnderstandFieldValueResponse extends SpeakeasyBase {
    contentType: string;
    listUnderstandFieldValueResponse?: ListUnderstandFieldValueListUnderstandFieldValueResponse;
    statusCode: number;
}
