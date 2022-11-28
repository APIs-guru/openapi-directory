import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteTransactionsTransactionIdAttachmentsAttachmentIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attachment_id" })
  attachmentId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=transaction_id" })
  transactionId: number;
}


export class DeleteTransactionsTransactionIdAttachmentsAttachmentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteTransactionsTransactionIdAttachmentsAttachmentIdPathParams;
}


export class DeleteTransactionsTransactionIdAttachmentsAttachmentIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
