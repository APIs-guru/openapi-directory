import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteTransactionsTransactionIdAttachmentsAttachmentIdPathParams extends SpeakeasyBase {
    attachmentId: number;
    transactionId: number;
}
export declare class DeleteTransactionsTransactionIdAttachmentsAttachmentIdRequest extends SpeakeasyBase {
    pathParams: DeleteTransactionsTransactionIdAttachmentsAttachmentIdPathParams;
}
export declare class DeleteTransactionsTransactionIdAttachmentsAttachmentIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
