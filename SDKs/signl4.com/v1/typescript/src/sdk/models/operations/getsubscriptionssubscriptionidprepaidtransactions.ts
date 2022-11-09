import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSubscriptionsSubscriptionIdPrepaidTransactionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: string;
}


export class GetSubscriptionsSubscriptionIdPrepaidTransactionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSubscriptionsSubscriptionIdPrepaidTransactionsPathParams;
}


export class GetSubscriptionsSubscriptionIdPrepaidTransactionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata({ elemType: shared.PrepaidTransactionInfo })
  prepaidTransactionInfos?: shared.PrepaidTransactionInfo[];

  @Metadata()
  statusCode: number;
}
