import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSavedQueryExportQueryParams extends SpeakeasyBase {
    q?: number[];
}
export declare class GetSavedQueryExportSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetSavedQueryExport400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetSavedQueryExport401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetSavedQueryExport404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetSavedQueryExport500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetSavedQueryExportRequest extends SpeakeasyBase {
    queryParams: GetSavedQueryExportQueryParams;
    security: GetSavedQueryExportSecurity;
}
export declare class GetSavedQueryExportResponse extends SpeakeasyBase {
    contentType: string;
    getSavedQueryExport200ApplicationZipBinaryString?: Uint8Array;
    getSavedQueryExport400ApplicationJsonObject?: GetSavedQueryExport400ApplicationJson;
    getSavedQueryExport401ApplicationJsonObject?: GetSavedQueryExport401ApplicationJson;
    getSavedQueryExport404ApplicationJsonObject?: GetSavedQueryExport404ApplicationJson;
    getSavedQueryExport500ApplicationJsonObject?: GetSavedQueryExport500ApplicationJson;
    statusCode: number;
}
