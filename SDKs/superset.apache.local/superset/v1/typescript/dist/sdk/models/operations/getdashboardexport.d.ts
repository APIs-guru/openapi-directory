import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDashboardExportQueryParams extends SpeakeasyBase {
    q?: number[];
}
export declare class GetDashboardExportSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetDashboardExport400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardExport401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardExport404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardExport422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardExport500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardExportRequest extends SpeakeasyBase {
    queryParams: GetDashboardExportQueryParams;
    security: GetDashboardExportSecurity;
}
export declare class GetDashboardExportResponse extends SpeakeasyBase {
    contentType: string;
    getDashboardExport200TextPlainString?: string;
    getDashboardExport400ApplicationJsonObject?: GetDashboardExport400ApplicationJson;
    getDashboardExport401ApplicationJsonObject?: GetDashboardExport401ApplicationJson;
    getDashboardExport404ApplicationJsonObject?: GetDashboardExport404ApplicationJson;
    getDashboardExport422ApplicationJsonObject?: GetDashboardExport422ApplicationJson;
    getDashboardExport500ApplicationJsonObject?: GetDashboardExport500ApplicationJson;
    statusCode: number;
}
