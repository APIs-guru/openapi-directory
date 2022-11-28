import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEventSubscriptionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubscriptionId" })
  subscriptionId: string;
}


export class GetEventSubscriptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEventSubscriptionsPathParams;
}


export class GetEventSubscriptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  eventSubscriptionsResponse?: shared.EventSubscriptionsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
