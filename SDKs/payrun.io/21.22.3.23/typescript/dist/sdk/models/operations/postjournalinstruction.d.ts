import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostJournalInstructionPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class PostJournalInstructionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PostJournalInstructionRequest extends SpeakeasyBase {
    pathParams: PostJournalInstructionPathParams;
    headers: PostJournalInstructionHeaders;
}
export declare class PostJournalInstructionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    link?: shared.Link;
    statusCode: number;
}
