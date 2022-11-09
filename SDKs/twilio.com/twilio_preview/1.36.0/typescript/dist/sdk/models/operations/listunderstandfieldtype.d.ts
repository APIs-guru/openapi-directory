import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTUNDERSTANDFIELDTYPE_SERVERS: string[];
export declare class ListUnderstandFieldTypePathParams extends SpeakeasyBase {
    assistantSid: string;
}
export declare class ListUnderstandFieldTypeQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListUnderstandFieldTypeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListUnderstandFieldTypeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListUnderstandFieldTypePathParams;
    queryParams: ListUnderstandFieldTypeQueryParams;
    security: ListUnderstandFieldTypeSecurity;
}
export declare class ListUnderstandFieldTypeListUnderstandFieldTypeResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListUnderstandFieldTypeListUnderstandFieldTypeResponse extends SpeakeasyBase {
    fieldTypes?: shared.PreviewUnderstandAssistantFieldType[];
    meta?: ListUnderstandFieldTypeListUnderstandFieldTypeResponseMeta;
}
export declare class ListUnderstandFieldTypeResponse extends SpeakeasyBase {
    contentType: string;
    listUnderstandFieldTypeResponse?: ListUnderstandFieldTypeListUnderstandFieldTypeResponse;
    statusCode: number;
}
