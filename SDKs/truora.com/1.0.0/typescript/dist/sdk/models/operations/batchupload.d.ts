import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchUploadPathParams extends SpeakeasyBase {
    reportId: string;
}
export declare class BatchUploadSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class BatchUploadRequest extends SpeakeasyBase {
    pathParams: BatchUploadPathParams;
    request: shared.BatchUploadInput;
    security: BatchUploadSecurity;
}
export declare class BatchUploadResponse extends SpeakeasyBase {
    contentType: string;
    error?: any;
    reportOutput?: shared.ReportOutput;
    statusCode: number;
}
