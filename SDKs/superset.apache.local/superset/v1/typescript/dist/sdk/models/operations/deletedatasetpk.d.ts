import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDatasetPkPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class DeleteDatasetPkSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class DeleteDatasetPk200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDatasetPk401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDatasetPk403ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDatasetPk404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDatasetPk422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDatasetPk500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDatasetPkRequest extends SpeakeasyBase {
    pathParams: DeleteDatasetPkPathParams;
    security: DeleteDatasetPkSecurity;
}
export declare class DeleteDatasetPkResponse extends SpeakeasyBase {
    contentType: string;
    deleteDatasetPk200ApplicationJsonObject?: DeleteDatasetPk200ApplicationJson;
    deleteDatasetPk401ApplicationJsonObject?: DeleteDatasetPk401ApplicationJson;
    deleteDatasetPk403ApplicationJsonObject?: DeleteDatasetPk403ApplicationJson;
    deleteDatasetPk404ApplicationJsonObject?: DeleteDatasetPk404ApplicationJson;
    deleteDatasetPk422ApplicationJsonObject?: DeleteDatasetPk422ApplicationJson;
    deleteDatasetPk500ApplicationJsonObject?: DeleteDatasetPk500ApplicationJson;
    statusCode: number;
}
