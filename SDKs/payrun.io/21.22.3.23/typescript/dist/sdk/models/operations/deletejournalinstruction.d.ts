import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteJournalInstructionPathParams extends SpeakeasyBase {
    employerId: string;
    journalInstructionId: string;
}
export declare class DeleteJournalInstructionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteJournalInstructionRequest extends SpeakeasyBase {
    pathParams: DeleteJournalInstructionPathParams;
    headers: DeleteJournalInstructionHeaders;
}
export declare class DeleteJournalInstructionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
