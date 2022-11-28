import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDatabasePkSelectStarTableNameSchemaNamePathParams extends SpeakeasyBase {
    pk: number;
    schemaName: string;
    tableName: string;
}
export declare class GetDatabasePkSelectStarTableNameSchemaNameSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetDatabasePkSelectStarTableNameSchemaName400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabasePkSelectStarTableNameSchemaName401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabasePkSelectStarTableNameSchemaName404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabasePkSelectStarTableNameSchemaName422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabasePkSelectStarTableNameSchemaName500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabasePkSelectStarTableNameSchemaNameRequest extends SpeakeasyBase {
    pathParams: GetDatabasePkSelectStarTableNameSchemaNamePathParams;
    security: GetDatabasePkSelectStarTableNameSchemaNameSecurity;
}
export declare class GetDatabasePkSelectStarTableNameSchemaNameResponse extends SpeakeasyBase {
    contentType: string;
    getDatabasePkSelectStarTableNameSchemaName400ApplicationJsonObject?: GetDatabasePkSelectStarTableNameSchemaName400ApplicationJson;
    getDatabasePkSelectStarTableNameSchemaName401ApplicationJsonObject?: GetDatabasePkSelectStarTableNameSchemaName401ApplicationJson;
    getDatabasePkSelectStarTableNameSchemaName404ApplicationJsonObject?: GetDatabasePkSelectStarTableNameSchemaName404ApplicationJson;
    getDatabasePkSelectStarTableNameSchemaName422ApplicationJsonObject?: GetDatabasePkSelectStarTableNameSchemaName422ApplicationJson;
    getDatabasePkSelectStarTableNameSchemaName500ApplicationJsonObject?: GetDatabasePkSelectStarTableNameSchemaName500ApplicationJson;
    selectStarResponseSchema?: shared.SelectStarResponseSchema;
    statusCode: number;
}
