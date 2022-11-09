import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ExportWirelessCsvQueryParams extends SpeakeasyBase {
    search?: string;
}
export declare class ExportWirelessCsvSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class ExportWirelessCsvRequest extends SpeakeasyBase {
    queryParams: ExportWirelessCsvQueryParams;
    security: ExportWirelessCsvSecurity;
}
export declare class ExportWirelessCsvResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    exportWirelessCsv200TextCsvBinaryString?: Uint8Array;
}
