import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateScanPathParams extends SpeakeasyBase {
    siteId: string;
}
export declare class CreateScanSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class CreateScanRequest extends SpeakeasyBase {
    pathParams: CreateScanPathParams;
    request?: shared.ScanOptions;
    security: CreateScanSecurity;
}
export declare class CreateScanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    task?: shared.Task;
}
