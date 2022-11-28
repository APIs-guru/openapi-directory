import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutJournalInstructionTemplatePathParams extends SpeakeasyBase {
    journalInstructionId: string;
}
export declare class PutJournalInstructionTemplateHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutJournalInstructionTemplateRequest extends SpeakeasyBase {
    pathParams: PutJournalInstructionTemplatePathParams;
    headers: PutJournalInstructionTemplateHeaders;
}
export declare class PutJournalInstructionTemplateResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    journalInstruction?: shared.JournalInstruction;
    statusCode: number;
}
