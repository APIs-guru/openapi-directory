import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTBINDING_SERVERS = [
	"https://notify.twilio.com",
];



export class ListBindingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListBindingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=EndDate" })
  endDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Identity" })
  identity?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartDate" })
  startDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Tag" })
  tag?: string[];
}


export class ListBindingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListBindingRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListBindingPathParams;

  @Metadata()
  queryParams: ListBindingQueryParams;

  @Metadata()
  security: ListBindingSecurity;
}


export class ListBindingListBindingResponseMeta extends SpeakeasyBase {
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


export class ListBindingListBindingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=bindings", elemType: shared.NotifyV1ServiceBinding })
  bindings?: shared.NotifyV1ServiceBinding[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListBindingListBindingResponseMeta;
}


export class ListBindingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listBindingResponse?: ListBindingListBindingResponse;

  @Metadata()
  statusCode: number;
}
