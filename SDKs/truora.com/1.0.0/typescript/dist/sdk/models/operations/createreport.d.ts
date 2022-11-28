import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateReportSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class CreateReportRequest extends SpeakeasyBase {
    request: shared.CreateReportInput;
    security: CreateReportSecurity;
}
export declare class CreateReportResponse extends SpeakeasyBase {
    contentType: string;
    reportOutput?: shared.ReportOutput;
    statusCode: number;
}
