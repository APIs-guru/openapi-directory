import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTransactionsIdAttachmentsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostTransactionsIdAttachmentsRequestBody extends SpeakeasyBase {
    attachmentId?: number;
}
export declare class PostTransactionsIdAttachmentsRequest extends SpeakeasyBase {
    pathParams: PostTransactionsIdAttachmentsPathParams;
    request?: PostTransactionsIdAttachmentsRequestBody;
}
export declare class PostTransactionsIdAttachmentsResponse extends SpeakeasyBase {
    attachment?: shared.Attachment;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
