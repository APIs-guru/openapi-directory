import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetReportLinesFromPayRunPathParams extends SpeakeasyBase {
    employerId: string;
    payRunId: string;
    payScheduleId: string;
}
export declare class GetReportLinesFromPayRunHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetReportLinesFromPayRunRequest extends SpeakeasyBase {
    pathParams: GetReportLinesFromPayRunPathParams;
    headers: GetReportLinesFromPayRunHeaders;
}
export declare class GetReportLinesFromPayRunResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
