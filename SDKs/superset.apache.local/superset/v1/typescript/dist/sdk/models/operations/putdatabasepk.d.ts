import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutDatabasePkPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class PutDatabasePkSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class PutDatabasePk200ApplicationJson extends SpeakeasyBase {
    id?: number;
    result?: shared.DatabaseRestApiPut;
}
export declare class PutDatabasePk400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutDatabasePk401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutDatabasePk403ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutDatabasePk404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutDatabasePk422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutDatabasePk500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutDatabasePkRequest extends SpeakeasyBase {
    pathParams: PutDatabasePkPathParams;
    request: shared.DatabaseRestApiPut;
    security: PutDatabasePkSecurity;
}
export declare class PutDatabasePkResponse extends SpeakeasyBase {
    contentType: string;
    putDatabasePk200ApplicationJsonObject?: PutDatabasePk200ApplicationJson;
    putDatabasePk400ApplicationJsonObject?: PutDatabasePk400ApplicationJson;
    putDatabasePk401ApplicationJsonObject?: PutDatabasePk401ApplicationJson;
    putDatabasePk403ApplicationJsonObject?: PutDatabasePk403ApplicationJson;
    putDatabasePk404ApplicationJsonObject?: PutDatabasePk404ApplicationJson;
    putDatabasePk422ApplicationJsonObject?: PutDatabasePk422ApplicationJson;
    putDatabasePk500ApplicationJsonObject?: PutDatabasePk500ApplicationJson;
    statusCode: number;
}
