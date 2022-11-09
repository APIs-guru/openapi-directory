import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetJournalLinesFromEmployeePathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
}
export declare class GetJournalLinesFromEmployeeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetJournalLinesFromEmployeeRequest extends SpeakeasyBase {
    pathParams: GetJournalLinesFromEmployeePathParams;
    headers: GetJournalLinesFromEmployeeHeaders;
}
export declare class GetJournalLinesFromEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
