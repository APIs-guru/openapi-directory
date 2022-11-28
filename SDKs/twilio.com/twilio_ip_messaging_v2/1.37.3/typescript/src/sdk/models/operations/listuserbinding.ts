import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListUserBindingServerList = [
	"https://ip-messaging.twilio.com",
] as const;


export class ListUserBindingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=UserSid" })
  userSid: string;
}


export class ListUserBindingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BindingType" })
  bindingType?: shared.UserBindingEnumBindingTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListUserBindingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListUserBindingListUserBindingResponseMeta extends SpeakeasyBase {
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


export class ListUserBindingListUserBindingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bindings", elemType: shared.IpMessagingV2ServiceUserUserBinding })
  bindings?: shared.IpMessagingV2ServiceUserUserBinding[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListUserBindingListUserBindingResponseMeta;
}


export class ListUserBindingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListUserBindingPathParams;

  @SpeakeasyMetadata()
  queryParams: ListUserBindingQueryParams;

  @SpeakeasyMetadata()
  security: ListUserBindingSecurity;
}


export class ListUserBindingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listUserBindingResponse?: ListUserBindingListUserBindingResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
