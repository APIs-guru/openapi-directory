import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetJournalLinesFromPayRunPathParams extends SpeakeasyBase {
    employerId: string;
    payRunId: string;
    payScheduleId: string;
}
export declare class GetJournalLinesFromPayRunHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetJournalLinesFromPayRunRequest extends SpeakeasyBase {
    pathParams: GetJournalLinesFromPayRunPathParams;
    headers: GetJournalLinesFromPayRunHeaders;
}
export declare class GetJournalLinesFromPayRunResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
