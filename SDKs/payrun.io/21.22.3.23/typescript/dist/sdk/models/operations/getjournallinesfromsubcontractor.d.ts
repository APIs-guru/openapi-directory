import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetJournalLinesFromSubContractorPathParams extends SpeakeasyBase {
    employerId: string;
    subContractorId: string;
}
export declare class GetJournalLinesFromSubContractorHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetJournalLinesFromSubContractorRequest extends SpeakeasyBase {
    pathParams: GetJournalLinesFromSubContractorPathParams;
    headers: GetJournalLinesFromSubContractorHeaders;
}
export declare class GetJournalLinesFromSubContractorResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
