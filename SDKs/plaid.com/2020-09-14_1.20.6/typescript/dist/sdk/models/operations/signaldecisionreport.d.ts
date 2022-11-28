import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SignalDecisionReportRequest extends SpeakeasyBase {
    request: shared.SignalDecisionReportRequest;
}
export declare class SignalDecisionReportResponse extends SpeakeasyBase {
    contentType: string;
    error?: Map<string, any>;
    signalDecisionReportResponse?: shared.SignalDecisionReportResponse;
    statusCode: number;
}
