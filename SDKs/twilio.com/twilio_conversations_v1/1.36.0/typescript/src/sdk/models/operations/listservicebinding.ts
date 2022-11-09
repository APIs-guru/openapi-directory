import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSERVICEBINDING_SERVERS = [
	"https://conversations.twilio.com",
];



export class ListServiceBindingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;
}


export class ListServiceBindingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=BindingType" })
  bindingType?: shared.ServiceBindingEnumBindingTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Identity" })
  identity?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListServiceBindingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListServiceBindingRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListServiceBindingPathParams;

  @Metadata()
  queryParams: ListServiceBindingQueryParams;

  @Metadata()
  security: ListServiceBindingSecurity;
}


export class ListServiceBindingListServiceBindingResponseMeta extends SpeakeasyBase {
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


export class ListServiceBindingListServiceBindingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=bindings", elemType: shared.ConversationsV1ServiceServiceBinding })
  bindings?: shared.ConversationsV1ServiceServiceBinding[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListServiceBindingListServiceBindingResponseMeta;
}


export class ListServiceBindingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listServiceBindingResponse?: ListServiceBindingListServiceBindingResponse;

  @Metadata()
  statusCode: number;
}
