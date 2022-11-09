import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteTransactionsTransactionIdAttachmentsAttachmentIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=attachment_id" })
  attachmentId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=transaction_id" })
  transactionId: number;
}


export class DeleteTransactionsTransactionIdAttachmentsAttachmentIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteTransactionsTransactionIdAttachmentsAttachmentIdPathParams;
}


export class DeleteTransactionsTransactionIdAttachmentsAttachmentIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
