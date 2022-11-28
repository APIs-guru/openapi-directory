import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteJournalInstructionTemplatePathParams extends SpeakeasyBase {
    journalInstructionId: string;
}
export declare class DeleteJournalInstructionTemplateHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteJournalInstructionTemplateRequest extends SpeakeasyBase {
    pathParams: DeleteJournalInstructionTemplatePathParams;
    headers: DeleteJournalInstructionTemplateHeaders;
}
export declare class DeleteJournalInstructionTemplateResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
