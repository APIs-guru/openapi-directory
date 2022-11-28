import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDatasetExportQueryParams extends SpeakeasyBase {
    q?: number[];
}
export declare class GetDatasetExportSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetDatasetExport400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatasetExport401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatasetExport404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatasetExport500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatasetExportRequest extends SpeakeasyBase {
    queryParams: GetDatasetExportQueryParams;
    security: GetDatasetExportSecurity;
}
export declare class GetDatasetExportResponse extends SpeakeasyBase {
    contentType: string;
    getDatasetExport200TextPlainString?: string;
    getDatasetExport400ApplicationJsonObject?: GetDatasetExport400ApplicationJson;
    getDatasetExport401ApplicationJsonObject?: GetDatasetExport401ApplicationJson;
    getDatasetExport404ApplicationJsonObject?: GetDatasetExport404ApplicationJson;
    getDatasetExport500ApplicationJsonObject?: GetDatasetExport500ApplicationJson;
    statusCode: number;
}
