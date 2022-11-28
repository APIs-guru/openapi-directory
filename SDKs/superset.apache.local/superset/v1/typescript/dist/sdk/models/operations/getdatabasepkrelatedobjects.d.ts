import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDatabasePkRelatedObjectsPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class GetDatabasePkRelatedObjectsSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetDatabasePkRelatedObjects401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabasePkRelatedObjects404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabasePkRelatedObjects500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabasePkRelatedObjectsRequest extends SpeakeasyBase {
    pathParams: GetDatabasePkRelatedObjectsPathParams;
    security: GetDatabasePkRelatedObjectsSecurity;
}
export declare class GetDatabasePkRelatedObjectsResponse extends SpeakeasyBase {
    contentType: string;
    databaseRelatedObjectsResponse?: shared.DatabaseRelatedObjectsResponse;
    getDatabasePkRelatedObjects401ApplicationJsonObject?: GetDatabasePkRelatedObjects401ApplicationJson;
    getDatabasePkRelatedObjects404ApplicationJsonObject?: GetDatabasePkRelatedObjects404ApplicationJson;
    getDatabasePkRelatedObjects500ApplicationJsonObject?: GetDatabasePkRelatedObjects500ApplicationJson;
    statusCode: number;
}
