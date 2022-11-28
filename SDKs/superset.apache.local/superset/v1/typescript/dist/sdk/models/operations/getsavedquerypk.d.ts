import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSavedQueryPkPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class GetSavedQueryPkQueryParams extends SpeakeasyBase {
    q?: shared.GetItemSchema;
}
export declare class GetSavedQueryPkSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetSavedQueryPk200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetSavedQueryPk200ApplicationJsonLabelColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetSavedQueryPk200ApplicationJson extends SpeakeasyBase {
    descriptionColumns?: GetSavedQueryPk200ApplicationJsonDescriptionColumns;
    id?: string;
    labelColumns?: GetSavedQueryPk200ApplicationJsonLabelColumns;
    result?: shared.SavedQueryRestApiGet;
    showColumns?: string[];
    showTitle?: string;
}
export declare class GetSavedQueryPk400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetSavedQueryPk401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetSavedQueryPk404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetSavedQueryPk422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetSavedQueryPk500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetSavedQueryPkRequest extends SpeakeasyBase {
    pathParams: GetSavedQueryPkPathParams;
    queryParams: GetSavedQueryPkQueryParams;
    security: GetSavedQueryPkSecurity;
}
export declare class GetSavedQueryPkResponse extends SpeakeasyBase {
    contentType: string;
    getSavedQueryPk200ApplicationJsonObject?: GetSavedQueryPk200ApplicationJson;
    getSavedQueryPk400ApplicationJsonObject?: GetSavedQueryPk400ApplicationJson;
    getSavedQueryPk401ApplicationJsonObject?: GetSavedQueryPk401ApplicationJson;
    getSavedQueryPk404ApplicationJsonObject?: GetSavedQueryPk404ApplicationJson;
    getSavedQueryPk422ApplicationJsonObject?: GetSavedQueryPk422ApplicationJson;
    getSavedQueryPk500ApplicationJsonObject?: GetSavedQueryPk500ApplicationJson;
    statusCode: number;
}
