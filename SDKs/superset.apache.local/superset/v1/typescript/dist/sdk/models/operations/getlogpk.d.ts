import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLogPkPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class GetLogPkQueryParams extends SpeakeasyBase {
    q?: shared.GetItemSchema;
}
export declare class GetLogPkSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetLogPk200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetLogPk200ApplicationJsonLabelColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetLogPk200ApplicationJson extends SpeakeasyBase {
    descriptionColumns?: GetLogPk200ApplicationJsonDescriptionColumns;
    id?: string;
    labelColumns?: GetLogPk200ApplicationJsonLabelColumns;
    result?: shared.LogRestApiGet;
    showColumns?: string[];
    showTitle?: string;
}
export declare class GetLogPk400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetLogPk401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetLogPk404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetLogPk422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetLogPk500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetLogPkRequest extends SpeakeasyBase {
    pathParams: GetLogPkPathParams;
    queryParams: GetLogPkQueryParams;
    security: GetLogPkSecurity;
}
export declare class GetLogPkResponse extends SpeakeasyBase {
    contentType: string;
    getLogPk200ApplicationJsonObject?: GetLogPk200ApplicationJson;
    getLogPk400ApplicationJsonObject?: GetLogPk400ApplicationJson;
    getLogPk401ApplicationJsonObject?: GetLogPk401ApplicationJson;
    getLogPk404ApplicationJsonObject?: GetLogPk404ApplicationJson;
    getLogPk422ApplicationJsonObject?: GetLogPk422ApplicationJson;
    getLogPk500ApplicationJsonObject?: GetLogPk500ApplicationJson;
    statusCode: number;
}
