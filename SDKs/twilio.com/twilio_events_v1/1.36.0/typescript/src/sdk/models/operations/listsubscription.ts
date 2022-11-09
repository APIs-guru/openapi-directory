import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSUBSCRIPTION_SERVERS = [
	"https://events.twilio.com",
];



export class ListSubscriptionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SinkSid" })
  sinkSid?: string;
}


export class ListSubscriptionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListSubscriptionQueryParams;

  @Metadata()
  security: ListSubscriptionSecurity;
}


export class ListSubscriptionListSubscriptionResponseMeta extends SpeakeasyBase {
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


export class ListSubscriptionListSubscriptionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListSubscriptionListSubscriptionResponseMeta;

  @Metadata({ data: "json, name=subscriptions", elemType: shared.EventsV1Subscription })
  subscriptions?: shared.EventsV1Subscription[];
}


export class ListSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSubscriptionResponse?: ListSubscriptionListSubscriptionResponse;

  @Metadata()
  statusCode: number;
}
