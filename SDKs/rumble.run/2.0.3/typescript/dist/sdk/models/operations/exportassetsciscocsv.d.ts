import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExportAssetsCiscoCsvQueryParams extends SpeakeasyBase {
    search?: string;
}
export declare class ExportAssetsCiscoCsvSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class ExportAssetsCiscoCsvRequest extends SpeakeasyBase {
    queryParams: ExportAssetsCiscoCsvQueryParams;
    security: ExportAssetsCiscoCsvSecurity;
}
export declare class ExportAssetsCiscoCsvResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    exportAssetsCiscoCsv200TextCsvBinaryString?: Uint8Array;
}
