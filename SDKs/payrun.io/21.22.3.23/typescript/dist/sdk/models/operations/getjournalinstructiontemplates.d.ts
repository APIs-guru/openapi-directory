import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetJournalInstructionTemplatesHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetJournalInstructionTemplatesRequest extends SpeakeasyBase {
    headers: GetJournalInstructionTemplatesHeaders;
}
export declare class GetJournalInstructionTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
