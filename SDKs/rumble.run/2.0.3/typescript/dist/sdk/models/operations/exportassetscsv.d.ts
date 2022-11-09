import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ExportAssetsCsvQueryParams extends SpeakeasyBase {
    search?: string;
}
export declare class ExportAssetsCsvSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class ExportAssetsCsvRequest extends SpeakeasyBase {
    queryParams: ExportAssetsCsvQueryParams;
    security: ExportAssetsCsvSecurity;
}
export declare class ExportAssetsCsvResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    exportAssetsCsv200TextCsvBinaryString?: Uint8Array;
}
