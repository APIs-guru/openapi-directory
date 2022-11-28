import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListBindingServerList = [
	"https://chat.twilio.com",
] as const;


export class ListBindingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListBindingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BindingType" })
  bindingType?: shared.BindingEnumBindingTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Identity" })
  identity?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListBindingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListBindingListBindingResponseMeta extends SpeakeasyBase {
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


export class ListBindingListBindingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bindings", elemType: shared.ChatV2ServiceBinding })
  bindings?: shared.ChatV2ServiceBinding[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListBindingListBindingResponseMeta;
}


export class ListBindingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListBindingPathParams;

  @SpeakeasyMetadata()
  queryParams: ListBindingQueryParams;

  @SpeakeasyMetadata()
  security: ListBindingSecurity;
}


export class ListBindingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listBindingResponse?: ListBindingListBindingResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
