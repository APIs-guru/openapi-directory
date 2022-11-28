import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListSubscribedEventServerList = [
	"https://events.twilio.com",
] as const;


export class ListSubscribedEventPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubscriptionSid" })
  subscriptionSid: string;
}


export class ListSubscribedEventQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSubscribedEventSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSubscribedEventListSubscribedEventResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ListSubscribedEventListSubscribedEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListSubscribedEventListSubscribedEventResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=types", elemType: shared.EventsV1SubscriptionSubscribedEvent })
  types?: shared.EventsV1SubscriptionSubscribedEvent[];
}


export class ListSubscribedEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListSubscribedEventPathParams;

  @SpeakeasyMetadata()
  queryParams: ListSubscribedEventQueryParams;

  @SpeakeasyMetadata()
  security: ListSubscribedEventSecurity;
}


export class ListSubscribedEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listSubscribedEventResponse?: ListSubscribedEventListSubscribedEventResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
