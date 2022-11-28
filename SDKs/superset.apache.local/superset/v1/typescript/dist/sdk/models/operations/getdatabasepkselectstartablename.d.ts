import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDatabasePkSelectStarTableNamePathParams extends SpeakeasyBase {
    pk: number;
    tableName: string;
}
export declare class GetDatabasePkSelectStarTableNameQueryParams extends SpeakeasyBase {
    schemaName: string;
}
export declare class GetDatabasePkSelectStarTableNameSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetDatabasePkSelectStarTableName400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabasePkSelectStarTableName401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabasePkSelectStarTableName404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabasePkSelectStarTableName422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabasePkSelectStarTableName500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabasePkSelectStarTableNameRequest extends SpeakeasyBase {
    pathParams: GetDatabasePkSelectStarTableNamePathParams;
    queryParams: GetDatabasePkSelectStarTableNameQueryParams;
    security: GetDatabasePkSelectStarTableNameSecurity;
}
export declare class GetDatabasePkSelectStarTableNameResponse extends SpeakeasyBase {
    contentType: string;
    getDatabasePkSelectStarTableName400ApplicationJsonObject?: GetDatabasePkSelectStarTableName400ApplicationJson;
    getDatabasePkSelectStarTableName401ApplicationJsonObject?: GetDatabasePkSelectStarTableName401ApplicationJson;
    getDatabasePkSelectStarTableName404ApplicationJsonObject?: GetDatabasePkSelectStarTableName404ApplicationJson;
    getDatabasePkSelectStarTableName422ApplicationJsonObject?: GetDatabasePkSelectStarTableName422ApplicationJson;
    getDatabasePkSelectStarTableName500ApplicationJsonObject?: GetDatabasePkSelectStarTableName500ApplicationJson;
    selectStarResponseSchema?: shared.SelectStarResponseSchema;
    statusCode: number;
}
