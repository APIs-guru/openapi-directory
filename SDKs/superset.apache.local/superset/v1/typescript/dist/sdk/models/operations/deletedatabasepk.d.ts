import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDatabasePkPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class DeleteDatabasePkSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class DeleteDatabasePk200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDatabasePk401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDatabasePk403ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDatabasePk404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDatabasePk422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDatabasePk500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDatabasePkRequest extends SpeakeasyBase {
    pathParams: DeleteDatabasePkPathParams;
    security: DeleteDatabasePkSecurity;
}
export declare class DeleteDatabasePkResponse extends SpeakeasyBase {
    contentType: string;
    deleteDatabasePk200ApplicationJsonObject?: DeleteDatabasePk200ApplicationJson;
    deleteDatabasePk401ApplicationJsonObject?: DeleteDatabasePk401ApplicationJson;
    deleteDatabasePk403ApplicationJsonObject?: DeleteDatabasePk403ApplicationJson;
    deleteDatabasePk404ApplicationJsonObject?: DeleteDatabasePk404ApplicationJson;
    deleteDatabasePk422ApplicationJsonObject?: DeleteDatabasePk422ApplicationJson;
    deleteDatabasePk500ApplicationJsonObject?: DeleteDatabasePk500ApplicationJson;
    statusCode: number;
}
