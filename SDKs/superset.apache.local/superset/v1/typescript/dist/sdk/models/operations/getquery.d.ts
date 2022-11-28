import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQueryQueryParams extends SpeakeasyBase {
    q?: shared.GetListSchema;
}
export declare class GetQuerySecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetQuery200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetQuery200ApplicationJsonLabelColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetQuery200ApplicationJson extends SpeakeasyBase {
    count?: number;
    descriptionColumns?: GetQuery200ApplicationJsonDescriptionColumns;
    ids?: string[];
    labelColumns?: GetQuery200ApplicationJsonLabelColumns;
    listColumns?: string[];
    listTitle?: string;
    orderColumns?: string[];
    result?: shared.QueryRestApiGetList[];
}
export declare class GetQuery400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetQuery401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetQuery422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetQuery500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetQueryRequest extends SpeakeasyBase {
    queryParams: GetQueryQueryParams;
    security: GetQuerySecurity;
}
export declare class GetQueryResponse extends SpeakeasyBase {
    contentType: string;
    getQuery200ApplicationJsonObject?: GetQuery200ApplicationJson;
    getQuery400ApplicationJsonObject?: GetQuery400ApplicationJson;
    getQuery401ApplicationJsonObject?: GetQuery401ApplicationJson;
    getQuery422ApplicationJsonObject?: GetQuery422ApplicationJson;
    getQuery500ApplicationJsonObject?: GetQuery500ApplicationJson;
    statusCode: number;
}
