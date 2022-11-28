import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDatabaseExportQueryParams extends SpeakeasyBase {
    q?: number[];
}
export declare class GetDatabaseExportSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetDatabaseExport401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabaseExport404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabaseExport500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabaseExportRequest extends SpeakeasyBase {
    queryParams: GetDatabaseExportQueryParams;
    security: GetDatabaseExportSecurity;
}
export declare class GetDatabaseExportResponse extends SpeakeasyBase {
    contentType: string;
    getDatabaseExport200ApplicationZipBinaryString?: Uint8Array;
    getDatabaseExport401ApplicationJsonObject?: GetDatabaseExport401ApplicationJson;
    getDatabaseExport404ApplicationJsonObject?: GetDatabaseExport404ApplicationJson;
    getDatabaseExport500ApplicationJsonObject?: GetDatabaseExport500ApplicationJson;
    statusCode: number;
}
