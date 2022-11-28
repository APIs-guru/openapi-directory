import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExportSitesCsvSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class ExportSitesCsvRequest extends SpeakeasyBase {
    security: ExportSitesCsvSecurity;
}
export declare class ExportSitesCsvResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    exportSitesCsv200TextCsvBinaryString?: Uint8Array;
}
