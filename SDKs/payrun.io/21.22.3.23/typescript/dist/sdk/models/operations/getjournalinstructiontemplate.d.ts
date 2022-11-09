import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetJournalInstructionTemplatePathParams extends SpeakeasyBase {
    journalInstructionId: string;
}
export declare class GetJournalInstructionTemplateHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetJournalInstructionTemplateRequest extends SpeakeasyBase {
    pathParams: GetJournalInstructionTemplatePathParams;
    headers: GetJournalInstructionTemplateHeaders;
}
export declare class GetJournalInstructionTemplateResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    journalInstruction?: shared.JournalInstruction;
    statusCode: number;
}
