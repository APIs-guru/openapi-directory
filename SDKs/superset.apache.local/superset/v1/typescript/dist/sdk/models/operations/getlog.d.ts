import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLogQueryParams extends SpeakeasyBase {
    q?: shared.GetListSchema;
}
export declare class GetLogSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetLog200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetLog200ApplicationJsonLabelColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetLog200ApplicationJson extends SpeakeasyBase {
    count?: number;
    descriptionColumns?: GetLog200ApplicationJsonDescriptionColumns;
    ids?: string[];
    labelColumns?: GetLog200ApplicationJsonLabelColumns;
    listColumns?: string[];
    listTitle?: string;
    orderColumns?: string[];
    result?: shared.LogRestApiGetList[];
}
export declare class GetLog400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetLog401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetLog422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetLog500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetLogRequest extends SpeakeasyBase {
    queryParams: GetLogQueryParams;
    security: GetLogSecurity;
}
export declare class GetLogResponse extends SpeakeasyBase {
    contentType: string;
    getLog200ApplicationJsonObject?: GetLog200ApplicationJson;
    getLog400ApplicationJsonObject?: GetLog400ApplicationJson;
    getLog401ApplicationJsonObject?: GetLog401ApplicationJson;
    getLog422ApplicationJsonObject?: GetLog422ApplicationJson;
    getLog500ApplicationJsonObject?: GetLog500ApplicationJson;
    statusCode: number;
}
