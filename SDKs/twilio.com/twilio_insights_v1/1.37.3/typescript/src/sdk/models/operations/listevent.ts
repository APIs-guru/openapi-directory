import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListEventServerList = [
	"https://insights.twilio.com",
] as const;


export class ListEventPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CallSid" })
  callSid: string;
}


export class ListEventQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Edge" })
  edge?: shared.EventEnumTwilioEdgeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListEventSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListEventListEventResponseMeta extends SpeakeasyBase {
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


export class ListEventListEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=events", elemType: shared.InsightsV1CallEvent })
  events?: shared.InsightsV1CallEvent[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListEventListEventResponseMeta;
}


export class ListEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListEventPathParams;

  @SpeakeasyMetadata()
  queryParams: ListEventQueryParams;

  @SpeakeasyMetadata()
  security: ListEventSecurity;
}


export class ListEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listEventResponse?: ListEventListEventResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
