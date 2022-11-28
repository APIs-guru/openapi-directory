import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutDatasetPkPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class PutDatasetPkQueryParams extends SpeakeasyBase {
    overrideColumns?: boolean;
}
export declare class PutDatasetPkSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class PutDatasetPk200ApplicationJson extends SpeakeasyBase {
    id?: number;
    result?: shared.DatasetRestApiPut;
}
export declare class PutDatasetPk400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutDatasetPk401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutDatasetPk403ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutDatasetPk404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutDatasetPk422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutDatasetPk500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutDatasetPkRequest extends SpeakeasyBase {
    pathParams: PutDatasetPkPathParams;
    queryParams: PutDatasetPkQueryParams;
    request: shared.DatasetRestApiPut;
    security: PutDatasetPkSecurity;
}
export declare class PutDatasetPkResponse extends SpeakeasyBase {
    contentType: string;
    putDatasetPk200ApplicationJsonObject?: PutDatasetPk200ApplicationJson;
    putDatasetPk400ApplicationJsonObject?: PutDatasetPk400ApplicationJson;
    putDatasetPk401ApplicationJsonObject?: PutDatasetPk401ApplicationJson;
    putDatasetPk403ApplicationJsonObject?: PutDatasetPk403ApplicationJson;
    putDatasetPk404ApplicationJsonObject?: PutDatasetPk404ApplicationJson;
    putDatasetPk422ApplicationJsonObject?: PutDatasetPk422ApplicationJson;
    putDatasetPk500ApplicationJsonObject?: PutDatasetPk500ApplicationJson;
    statusCode: number;
}
