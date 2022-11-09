import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetJournalInstructionsFromEmployerPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class GetJournalInstructionsFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetJournalInstructionsFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetJournalInstructionsFromEmployerPathParams;
    headers: GetJournalInstructionsFromEmployerHeaders;
}
export declare class GetJournalInstructionsFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
