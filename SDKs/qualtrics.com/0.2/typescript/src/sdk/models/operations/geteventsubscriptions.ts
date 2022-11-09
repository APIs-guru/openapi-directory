import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventSubscriptionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=SubscriptionId" })
  subscriptionId: string;
}


export class GetEventSubscriptionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEventSubscriptionsPathParams;
}


export class GetEventSubscriptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  eventSubscriptionsResponse?: shared.EventSubscriptionsResponse;

  @Metadata()
  statusCode: number;
}
