import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDatabasePkFunctionNamesPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class GetDatabasePkFunctionNamesSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetDatabasePkFunctionNames401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabasePkFunctionNames404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabasePkFunctionNames500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabasePkFunctionNamesRequest extends SpeakeasyBase {
    pathParams: GetDatabasePkFunctionNamesPathParams;
    security: GetDatabasePkFunctionNamesSecurity;
}
export declare class GetDatabasePkFunctionNamesResponse extends SpeakeasyBase {
    contentType: string;
    databaseFunctionNamesResponse?: shared.DatabaseFunctionNamesResponse;
    getDatabasePkFunctionNames401ApplicationJsonObject?: GetDatabasePkFunctionNames401ApplicationJson;
    getDatabasePkFunctionNames404ApplicationJsonObject?: GetDatabasePkFunctionNames404ApplicationJson;
    getDatabasePkFunctionNames500ApplicationJsonObject?: GetDatabasePkFunctionNames500ApplicationJson;
    statusCode: number;
}
