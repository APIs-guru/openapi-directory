import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDatasetQueryParams extends SpeakeasyBase {
    q?: number[];
}
export declare class DeleteDatasetSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class DeleteDataset200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDataset400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDataset401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDataset403ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDataset404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDataset422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDataset500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDatasetRequest extends SpeakeasyBase {
    queryParams: DeleteDatasetQueryParams;
    security: DeleteDatasetSecurity;
}
export declare class DeleteDatasetResponse extends SpeakeasyBase {
    contentType: string;
    deleteDataset200ApplicationJsonObject?: DeleteDataset200ApplicationJson;
    deleteDataset400ApplicationJsonObject?: DeleteDataset400ApplicationJson;
    deleteDataset401ApplicationJsonObject?: DeleteDataset401ApplicationJson;
    deleteDataset403ApplicationJsonObject?: DeleteDataset403ApplicationJson;
    deleteDataset404ApplicationJsonObject?: DeleteDataset404ApplicationJson;
    deleteDataset422ApplicationJsonObject?: DeleteDataset422ApplicationJson;
    deleteDataset500ApplicationJsonObject?: DeleteDataset500ApplicationJson;
    statusCode: number;
}
