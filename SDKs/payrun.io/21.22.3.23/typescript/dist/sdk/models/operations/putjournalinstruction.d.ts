import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutJournalInstructionPathParams extends SpeakeasyBase {
    employerId: string;
    journalInstructionId: string;
}
export declare class PutJournalInstructionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutJournalInstructionRequest extends SpeakeasyBase {
    pathParams: PutJournalInstructionPathParams;
    headers: PutJournalInstructionHeaders;
}
export declare class PutJournalInstructionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    journalInstruction?: shared.JournalInstruction;
    statusCode: number;
}
