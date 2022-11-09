import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetJournalLineFromEmployerPathParams extends SpeakeasyBase {
    employerId: string;
    journalLineId: string;
}
export declare class GetJournalLineFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetJournalLineFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetJournalLineFromEmployerPathParams;
    headers: GetJournalLineFromEmployerHeaders;
}
export declare class GetJournalLineFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    journalLine?: shared.JournalLine;
    statusCode: number;
}
