import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSubscriptionsSubscriptionIdChannelPricesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: string;
}


export class GetSubscriptionsSubscriptionIdChannelPricesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSubscriptionsSubscriptionIdChannelPricesPathParams;
}


export class GetSubscriptionsSubscriptionIdChannelPricesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  channelPriceInfo?: shared.ChannelPriceInfo;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;
}
