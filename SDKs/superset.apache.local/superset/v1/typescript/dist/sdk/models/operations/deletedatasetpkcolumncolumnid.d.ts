import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDatasetPkColumnColumnIdPathParams extends SpeakeasyBase {
    columnId: number;
    pk: number;
}
export declare class DeleteDatasetPkColumnColumnIdSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class DeleteDatasetPkColumnColumnId200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDatasetPkColumnColumnId401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDatasetPkColumnColumnId403ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDatasetPkColumnColumnId404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDatasetPkColumnColumnId422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDatasetPkColumnColumnId500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDatasetPkColumnColumnIdRequest extends SpeakeasyBase {
    pathParams: DeleteDatasetPkColumnColumnIdPathParams;
    security: DeleteDatasetPkColumnColumnIdSecurity;
}
export declare class DeleteDatasetPkColumnColumnIdResponse extends SpeakeasyBase {
    contentType: string;
    deleteDatasetPkColumnColumnId200ApplicationJsonObject?: DeleteDatasetPkColumnColumnId200ApplicationJson;
    deleteDatasetPkColumnColumnId401ApplicationJsonObject?: DeleteDatasetPkColumnColumnId401ApplicationJson;
    deleteDatasetPkColumnColumnId403ApplicationJsonObject?: DeleteDatasetPkColumnColumnId403ApplicationJson;
    deleteDatasetPkColumnColumnId404ApplicationJsonObject?: DeleteDatasetPkColumnColumnId404ApplicationJson;
    deleteDatasetPkColumnColumnId422ApplicationJsonObject?: DeleteDatasetPkColumnColumnId422ApplicationJson;
    deleteDatasetPkColumnColumnId500ApplicationJsonObject?: DeleteDatasetPkColumnColumnId500ApplicationJson;
    statusCode: number;
}
