import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportScanDataPathParams extends SpeakeasyBase {
    siteId: string;
}
export declare class ImportScanDataSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class ImportScanDataRequest extends SpeakeasyBase {
    pathParams: ImportScanDataPathParams;
    request?: Uint8Array;
    security: ImportScanDataSecurity;
}
export declare class ImportScanDataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    task?: shared.Task;
}
