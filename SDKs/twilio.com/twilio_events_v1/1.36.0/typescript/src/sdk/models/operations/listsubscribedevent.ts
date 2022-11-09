import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSUBSCRIBEDEVENT_SERVERS = [
	"https://events.twilio.com",
];



export class ListSubscribedEventPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=SubscriptionSid" })
  subscriptionSid: string;
}


export class ListSubscribedEventQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSubscribedEventSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSubscribedEventRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListSubscribedEventPathParams;

  @Metadata()
  queryParams: ListSubscribedEventQueryParams;

  @Metadata()
  security: ListSubscribedEventSecurity;
}


export class ListSubscribedEventListSubscribedEventResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class ListSubscribedEventListSubscribedEventResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListSubscribedEventListSubscribedEventResponseMeta;

  @Metadata({ data: "json, name=types", elemType: shared.EventsV1SubscriptionSubscribedEvent })
  types?: shared.EventsV1SubscriptionSubscribedEvent[];
}


export class ListSubscribedEventResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSubscribedEventResponse?: ListSubscribedEventListSubscribedEventResponse;

  @Metadata()
  statusCode: number;
}
