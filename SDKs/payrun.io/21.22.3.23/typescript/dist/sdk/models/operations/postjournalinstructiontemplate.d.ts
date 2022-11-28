import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostJournalInstructionTemplateHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PostJournalInstructionTemplateRequest extends SpeakeasyBase {
    headers: PostJournalInstructionTemplateHeaders;
}
export declare class PostJournalInstructionTemplateResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    link?: shared.Link;
    statusCode: number;
}
