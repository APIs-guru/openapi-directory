import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListServiceBindingServerList = [
	"https://conversations.twilio.com",
] as const;


export class ListServiceBindingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;
}


export class ListServiceBindingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BindingType" })
  bindingType?: shared.ServiceBindingEnumBindingTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Identity" })
  identity?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListServiceBindingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListServiceBindingListServiceBindingResponseMeta extends SpeakeasyBase {
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


export class ListServiceBindingListServiceBindingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bindings", elemType: shared.ConversationsV1ServiceServiceBinding })
  bindings?: shared.ConversationsV1ServiceServiceBinding[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListServiceBindingListServiceBindingResponseMeta;
}


export class ListServiceBindingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListServiceBindingPathParams;

  @SpeakeasyMetadata()
  queryParams: ListServiceBindingQueryParams;

  @SpeakeasyMetadata()
  security: ListServiceBindingSecurity;
}


export class ListServiceBindingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listServiceBindingResponse?: ListServiceBindingListServiceBindingResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
