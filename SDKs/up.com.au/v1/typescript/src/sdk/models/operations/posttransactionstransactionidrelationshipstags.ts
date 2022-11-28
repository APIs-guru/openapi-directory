import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostTransactionsTransactionIdRelationshipsTagsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=transactionId" })
  transactionId: string;
}


export class PostTransactionsTransactionIdRelationshipsTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTransactionsTransactionIdRelationshipsTagsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.UpdateTransactionTagsRequest;
}


export class PostTransactionsTransactionIdRelationshipsTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
