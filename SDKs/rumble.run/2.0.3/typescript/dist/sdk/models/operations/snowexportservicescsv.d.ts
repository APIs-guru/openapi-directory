import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SnowExportServicesCsvSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class SnowExportServicesCsvRequest extends SpeakeasyBase {
    security: SnowExportServicesCsvSecurity;
}
export declare class SnowExportServicesCsvResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    snowExportServicesCsv200TextCsvBinaryString?: Uint8Array;
}
