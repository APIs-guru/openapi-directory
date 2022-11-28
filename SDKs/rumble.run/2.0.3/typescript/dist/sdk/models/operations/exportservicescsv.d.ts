import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExportServicesCsvQueryParams extends SpeakeasyBase {
    search?: string;
}
export declare class ExportServicesCsvSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class ExportServicesCsvRequest extends SpeakeasyBase {
    queryParams: ExportServicesCsvQueryParams;
    security: ExportServicesCsvSecurity;
}
export declare class ExportServicesCsvResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    exportServicesCsv200TextCsvBinaryString?: Uint8Array;
}
