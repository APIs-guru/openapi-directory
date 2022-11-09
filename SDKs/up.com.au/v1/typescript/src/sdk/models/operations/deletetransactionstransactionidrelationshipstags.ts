import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteTransactionsTransactionIdRelationshipsTagsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=transactionId" })
  transactionId: string;
}


export class DeleteTransactionsTransactionIdRelationshipsTagsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteTransactionsTransactionIdRelationshipsTagsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.UpdateTransactionTagsRequest;
}


export class DeleteTransactionsTransactionIdRelationshipsTagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
