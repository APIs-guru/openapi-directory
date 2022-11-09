import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTFIELDTYPE_SERVERS: string[];
export declare class ListFieldTypePathParams extends SpeakeasyBase {
    assistantSid: string;
}
export declare class ListFieldTypeQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListFieldTypeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListFieldTypeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListFieldTypePathParams;
    queryParams: ListFieldTypeQueryParams;
    security: ListFieldTypeSecurity;
}
export declare class ListFieldTypeListFieldTypeResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListFieldTypeListFieldTypeResponse extends SpeakeasyBase {
    fieldTypes?: shared.AutopilotV1AssistantFieldType[];
    meta?: ListFieldTypeListFieldTypeResponseMeta;
}
export declare class ListFieldTypeResponse extends SpeakeasyBase {
    contentType: string;
    listFieldTypeResponse?: ListFieldTypeListFieldTypeResponse;
    statusCode: number;
}
