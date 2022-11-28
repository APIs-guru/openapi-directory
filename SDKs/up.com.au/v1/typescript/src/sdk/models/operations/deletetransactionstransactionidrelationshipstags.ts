import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteTransactionsTransactionIdRelationshipsTagsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=transactionId" })
  transactionId: string;
}


export class DeleteTransactionsTransactionIdRelationshipsTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteTransactionsTransactionIdRelationshipsTagsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.UpdateTransactionTagsRequest;
}


export class DeleteTransactionsTransactionIdRelationshipsTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
