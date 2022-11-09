import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSubscriptionsSubscriptionIdPrepaidBalancePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: string;
}


export class GetSubscriptionsSubscriptionIdPrepaidBalanceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSubscriptionsSubscriptionIdPrepaidBalancePathParams;
}


export class GetSubscriptionsSubscriptionIdPrepaidBalanceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  prepaidBalanceInfo?: shared.PrepaidBalanceInfo;

  @Metadata()
  statusCode: number;
}
