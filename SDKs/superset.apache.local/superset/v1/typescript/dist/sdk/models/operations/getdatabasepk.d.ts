import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDatabasePkPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class GetDatabasePkQueryParams extends SpeakeasyBase {
    q?: shared.GetItemSchema;
}
export declare class GetDatabasePkSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetDatabasePk200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetDatabasePk200ApplicationJsonLabelColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetDatabasePk200ApplicationJson extends SpeakeasyBase {
    descriptionColumns?: GetDatabasePk200ApplicationJsonDescriptionColumns;
    id?: string;
    labelColumns?: GetDatabasePk200ApplicationJsonLabelColumns;
    result?: shared.DatabaseRestApiGet;
    showColumns?: string[];
    showTitle?: string;
}
export declare class GetDatabasePk400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabasePk401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabasePk404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabasePk422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabasePk500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabasePkRequest extends SpeakeasyBase {
    pathParams: GetDatabasePkPathParams;
    queryParams: GetDatabasePkQueryParams;
    security: GetDatabasePkSecurity;
}
export declare class GetDatabasePkResponse extends SpeakeasyBase {
    contentType: string;
    getDatabasePk200ApplicationJsonObject?: GetDatabasePk200ApplicationJson;
    getDatabasePk400ApplicationJsonObject?: GetDatabasePk400ApplicationJson;
    getDatabasePk401ApplicationJsonObject?: GetDatabasePk401ApplicationJson;
    getDatabasePk404ApplicationJsonObject?: GetDatabasePk404ApplicationJson;
    getDatabasePk422ApplicationJsonObject?: GetDatabasePk422ApplicationJson;
    getDatabasePk500ApplicationJsonObject?: GetDatabasePk500ApplicationJson;
    statusCode: number;
}
