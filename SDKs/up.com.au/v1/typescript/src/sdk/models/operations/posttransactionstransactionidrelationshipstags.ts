import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostTransactionsTransactionIdRelationshipsTagsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=transactionId" })
  transactionId: string;
}


export class PostTransactionsTransactionIdRelationshipsTagsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostTransactionsTransactionIdRelationshipsTagsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.UpdateTransactionTagsRequest;
}


export class PostTransactionsTransactionIdRelationshipsTagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
