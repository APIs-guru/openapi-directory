import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDatabasePkSchemasPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class GetDatabasePkSchemasQueryParams extends SpeakeasyBase {
    q?: shared.DatabaseSchemasQuerySchema;
}
export declare class GetDatabasePkSchemasSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetDatabasePkSchemas400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabasePkSchemas401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabasePkSchemas404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabasePkSchemas500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabasePkSchemasRequest extends SpeakeasyBase {
    pathParams: GetDatabasePkSchemasPathParams;
    queryParams: GetDatabasePkSchemasQueryParams;
    security: GetDatabasePkSchemasSecurity;
}
export declare class GetDatabasePkSchemasResponse extends SpeakeasyBase {
    contentType: string;
    getDatabasePkSchemas400ApplicationJsonObject?: GetDatabasePkSchemas400ApplicationJson;
    getDatabasePkSchemas401ApplicationJsonObject?: GetDatabasePkSchemas401ApplicationJson;
    getDatabasePkSchemas404ApplicationJsonObject?: GetDatabasePkSchemas404ApplicationJson;
    getDatabasePkSchemas500ApplicationJsonObject?: GetDatabasePkSchemas500ApplicationJson;
    schemasResponseSchema?: shared.SchemasResponseSchema;
    statusCode: number;
}
