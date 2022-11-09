import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetJournalLinesFromEmployerPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class GetJournalLinesFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetJournalLinesFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetJournalLinesFromEmployerPathParams;
    headers: GetJournalLinesFromEmployerHeaders;
}
export declare class GetJournalLinesFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
