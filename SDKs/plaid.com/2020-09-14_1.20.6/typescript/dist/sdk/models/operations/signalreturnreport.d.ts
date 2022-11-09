import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SignalReturnReportRequest extends SpeakeasyBase {
    request: shared.SignalReturnReportRequest;
}
export declare class SignalReturnReportResponse extends SpeakeasyBase {
    contentType: string;
    error?: Map<string, any>;
    signalReturnReportResponse?: shared.SignalReturnReportResponse;
    statusCode: number;
}
