import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDatasetPkMetricMetricIdPathParams extends SpeakeasyBase {
    metricId: number;
    pk: number;
}
export declare class DeleteDatasetPkMetricMetricIdSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class DeleteDatasetPkMetricMetricId200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDatasetPkMetricMetricId401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDatasetPkMetricMetricId403ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDatasetPkMetricMetricId404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDatasetPkMetricMetricId422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDatasetPkMetricMetricId500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteDatasetPkMetricMetricIdRequest extends SpeakeasyBase {
    pathParams: DeleteDatasetPkMetricMetricIdPathParams;
    security: DeleteDatasetPkMetricMetricIdSecurity;
}
export declare class DeleteDatasetPkMetricMetricIdResponse extends SpeakeasyBase {
    contentType: string;
    deleteDatasetPkMetricMetricId200ApplicationJsonObject?: DeleteDatasetPkMetricMetricId200ApplicationJson;
    deleteDatasetPkMetricMetricId401ApplicationJsonObject?: DeleteDatasetPkMetricMetricId401ApplicationJson;
    deleteDatasetPkMetricMetricId403ApplicationJsonObject?: DeleteDatasetPkMetricMetricId403ApplicationJson;
    deleteDatasetPkMetricMetricId404ApplicationJsonObject?: DeleteDatasetPkMetricMetricId404ApplicationJson;
    deleteDatasetPkMetricMetricId422ApplicationJsonObject?: DeleteDatasetPkMetricMetricId422ApplicationJson;
    deleteDatasetPkMetricMetricId500ApplicationJsonObject?: DeleteDatasetPkMetricMetricId500ApplicationJson;
    statusCode: number;
}
