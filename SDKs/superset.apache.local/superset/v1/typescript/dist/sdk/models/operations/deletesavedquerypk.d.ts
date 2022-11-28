import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSavedQueryPkPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class DeleteSavedQueryPkSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class DeleteSavedQueryPk200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteSavedQueryPk404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteSavedQueryPk422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteSavedQueryPk500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteSavedQueryPkRequest extends SpeakeasyBase {
    pathParams: DeleteSavedQueryPkPathParams;
    security: DeleteSavedQueryPkSecurity;
}
export declare class DeleteSavedQueryPkResponse extends SpeakeasyBase {
    contentType: string;
    deleteSavedQueryPk200ApplicationJsonObject?: DeleteSavedQueryPk200ApplicationJson;
    deleteSavedQueryPk404ApplicationJsonObject?: DeleteSavedQueryPk404ApplicationJson;
    deleteSavedQueryPk422ApplicationJsonObject?: DeleteSavedQueryPk422ApplicationJson;
    deleteSavedQueryPk500ApplicationJsonObject?: DeleteSavedQueryPk500ApplicationJson;
    statusCode: number;
}
