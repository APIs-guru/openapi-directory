import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListSubscriptionEventsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=subscription_id" })
  subscriptionId: string;
}


export class ListSubscriptionEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class ListSubscriptionEventsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ListSubscriptionEventsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListSubscriptionEventsPathParams;

  @Metadata()
  queryParams: ListSubscriptionEventsQueryParams;

  @Metadata()
  security: ListSubscriptionEventsSecurity;
}


export class ListSubscriptionEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSubscriptionEventsResponse?: shared.ListSubscriptionEventsResponse;

  @Metadata()
  statusCode: number;
}
