import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSubscriptionsSubscriptionIdPrepaidBalancePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: string;
}


export class GetSubscriptionsSubscriptionIdPrepaidBalanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubscriptionsSubscriptionIdPrepaidBalancePathParams;
}


export class GetSubscriptionsSubscriptionIdPrepaidBalanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  prepaidBalanceInfo?: shared.PrepaidBalanceInfo;

  @SpeakeasyMetadata()
  statusCode: number;
}
