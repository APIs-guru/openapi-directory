import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSavedQueryQueryParams extends SpeakeasyBase {
    q?: shared.GetListSchema;
}
export declare class GetSavedQuerySecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetSavedQuery200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetSavedQuery200ApplicationJsonLabelColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetSavedQuery200ApplicationJson extends SpeakeasyBase {
    count?: number;
    descriptionColumns?: GetSavedQuery200ApplicationJsonDescriptionColumns;
    ids?: string[];
    labelColumns?: GetSavedQuery200ApplicationJsonLabelColumns;
    listColumns?: string[];
    listTitle?: string;
    orderColumns?: string[];
    result?: shared.SavedQueryRestApiGetList[];
}
export declare class GetSavedQuery400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetSavedQuery401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetSavedQuery422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetSavedQuery500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetSavedQueryRequest extends SpeakeasyBase {
    queryParams: GetSavedQueryQueryParams;
    security: GetSavedQuerySecurity;
}
export declare class GetSavedQueryResponse extends SpeakeasyBase {
    contentType: string;
    getSavedQuery200ApplicationJsonObject?: GetSavedQuery200ApplicationJson;
    getSavedQuery400ApplicationJsonObject?: GetSavedQuery400ApplicationJson;
    getSavedQuery401ApplicationJsonObject?: GetSavedQuery401ApplicationJson;
    getSavedQuery422ApplicationJsonObject?: GetSavedQuery422ApplicationJson;
    getSavedQuery500ApplicationJsonObject?: GetSavedQuery500ApplicationJson;
    statusCode: number;
}
