import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SnowExportAssetsCsvSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class SnowExportAssetsCsvRequest extends SpeakeasyBase {
    security: SnowExportAssetsCsvSecurity;
}
export declare class SnowExportAssetsCsvResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    snowExportAssetsCsv200TextCsvBinaryString?: Uint8Array;
}
