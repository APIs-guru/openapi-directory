import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQueryPkPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class GetQueryPkQueryParams extends SpeakeasyBase {
    q?: shared.GetItemSchema;
}
export declare class GetQueryPkSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetQueryPk200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetQueryPk200ApplicationJsonLabelColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetQueryPk200ApplicationJson extends SpeakeasyBase {
    descriptionColumns?: GetQueryPk200ApplicationJsonDescriptionColumns;
    id?: string;
    labelColumns?: GetQueryPk200ApplicationJsonLabelColumns;
    result?: shared.QueryRestApiGet;
    showColumns?: string[];
    showTitle?: string;
}
export declare class GetQueryPk400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetQueryPk401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetQueryPk404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetQueryPk422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetQueryPk500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetQueryPkRequest extends SpeakeasyBase {
    pathParams: GetQueryPkPathParams;
    queryParams: GetQueryPkQueryParams;
    security: GetQueryPkSecurity;
}
export declare class GetQueryPkResponse extends SpeakeasyBase {
    contentType: string;
    getQueryPk200ApplicationJsonObject?: GetQueryPk200ApplicationJson;
    getQueryPk400ApplicationJsonObject?: GetQueryPk400ApplicationJson;
    getQueryPk401ApplicationJsonObject?: GetQueryPk401ApplicationJson;
    getQueryPk404ApplicationJsonObject?: GetQueryPk404ApplicationJson;
    getQueryPk422ApplicationJsonObject?: GetQueryPk422ApplicationJson;
    getQueryPk500ApplicationJsonObject?: GetQueryPk500ApplicationJson;
    statusCode: number;
}
