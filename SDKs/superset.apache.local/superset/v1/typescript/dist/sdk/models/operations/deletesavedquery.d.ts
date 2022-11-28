import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSavedQueryQueryParams extends SpeakeasyBase {
    q?: number[];
}
export declare class DeleteSavedQuerySecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class DeleteSavedQuery200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteSavedQuery401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteSavedQuery404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteSavedQuery422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteSavedQuery500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteSavedQueryRequest extends SpeakeasyBase {
    queryParams: DeleteSavedQueryQueryParams;
    security: DeleteSavedQuerySecurity;
}
export declare class DeleteSavedQueryResponse extends SpeakeasyBase {
    contentType: string;
    deleteSavedQuery200ApplicationJsonObject?: DeleteSavedQuery200ApplicationJson;
    deleteSavedQuery401ApplicationJsonObject?: DeleteSavedQuery401ApplicationJson;
    deleteSavedQuery404ApplicationJsonObject?: DeleteSavedQuery404ApplicationJson;
    deleteSavedQuery422ApplicationJsonObject?: DeleteSavedQuery422ApplicationJson;
    deleteSavedQuery500ApplicationJsonObject?: DeleteSavedQuery500ApplicationJson;
    statusCode: number;
}
