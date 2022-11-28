import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDatabasePkTableTableNameSchemaNamePathParams extends SpeakeasyBase {
    pk: number;
    schemaName: string;
    tableName: string;
}
export declare class GetDatabasePkTableTableNameSchemaNameSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetDatabasePkTableTableNameSchemaName400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabasePkTableTableNameSchemaName401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabasePkTableTableNameSchemaName404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabasePkTableTableNameSchemaName422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabasePkTableTableNameSchemaName500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabasePkTableTableNameSchemaNameRequest extends SpeakeasyBase {
    pathParams: GetDatabasePkTableTableNameSchemaNamePathParams;
    security: GetDatabasePkTableTableNameSchemaNameSecurity;
}
export declare class GetDatabasePkTableTableNameSchemaNameResponse extends SpeakeasyBase {
    contentType: string;
    getDatabasePkTableTableNameSchemaName400ApplicationJsonObject?: GetDatabasePkTableTableNameSchemaName400ApplicationJson;
    getDatabasePkTableTableNameSchemaName401ApplicationJsonObject?: GetDatabasePkTableTableNameSchemaName401ApplicationJson;
    getDatabasePkTableTableNameSchemaName404ApplicationJsonObject?: GetDatabasePkTableTableNameSchemaName404ApplicationJson;
    getDatabasePkTableTableNameSchemaName422ApplicationJsonObject?: GetDatabasePkTableTableNameSchemaName422ApplicationJson;
    getDatabasePkTableTableNameSchemaName500ApplicationJsonObject?: GetDatabasePkTableTableNameSchemaName500ApplicationJson;
    statusCode: number;
    tableMetadataResponseSchema?: shared.TableMetadataResponseSchema;
}
