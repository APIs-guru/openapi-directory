import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChartExportQueryParams extends SpeakeasyBase {
    q?: number[];
}
export declare class GetChartExportSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetChartExport400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartExport401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartExport404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartExport500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartExportRequest extends SpeakeasyBase {
    queryParams: GetChartExportQueryParams;
    security: GetChartExportSecurity;
}
export declare class GetChartExportResponse extends SpeakeasyBase {
    contentType: string;
    getChartExport200ApplicationZipBinaryString?: Uint8Array;
    getChartExport400ApplicationJsonObject?: GetChartExport400ApplicationJson;
    getChartExport401ApplicationJsonObject?: GetChartExport401ApplicationJson;
    getChartExport404ApplicationJsonObject?: GetChartExport404ApplicationJson;
    getChartExport500ApplicationJsonObject?: GetChartExport500ApplicationJson;
    statusCode: number;
}
