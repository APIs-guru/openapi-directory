import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetJournalInstructionFromEmployerPathParams extends SpeakeasyBase {
    employerId: string;
    journalInstructionId: string;
}
export declare class GetJournalInstructionFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetJournalInstructionFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetJournalInstructionFromEmployerPathParams;
    headers: GetJournalInstructionFromEmployerHeaders;
}
export declare class GetJournalInstructionFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    journalInstruction?: shared.JournalInstruction;
    statusCode: number;
}
