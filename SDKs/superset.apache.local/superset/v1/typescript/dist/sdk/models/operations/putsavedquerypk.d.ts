import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSavedQueryPkPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class PutSavedQueryPkSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class PutSavedQueryPk200ApplicationJson extends SpeakeasyBase {
    result?: shared.SavedQueryRestApiPut;
}
export declare class PutSavedQueryPk400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutSavedQueryPk401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutSavedQueryPk404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutSavedQueryPk422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutSavedQueryPk500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutSavedQueryPkRequest extends SpeakeasyBase {
    pathParams: PutSavedQueryPkPathParams;
    request: shared.SavedQueryRestApiPut;
    security: PutSavedQueryPkSecurity;
}
export declare class PutSavedQueryPkResponse extends SpeakeasyBase {
    contentType: string;
    putSavedQueryPk200ApplicationJsonObject?: PutSavedQueryPk200ApplicationJson;
    putSavedQueryPk400ApplicationJsonObject?: PutSavedQueryPk400ApplicationJson;
    putSavedQueryPk401ApplicationJsonObject?: PutSavedQueryPk401ApplicationJson;
    putSavedQueryPk404ApplicationJsonObject?: PutSavedQueryPk404ApplicationJson;
    putSavedQueryPk422ApplicationJsonObject?: PutSavedQueryPk422ApplicationJson;
    putSavedQueryPk500ApplicationJsonObject?: PutSavedQueryPk500ApplicationJson;
    statusCode: number;
}
