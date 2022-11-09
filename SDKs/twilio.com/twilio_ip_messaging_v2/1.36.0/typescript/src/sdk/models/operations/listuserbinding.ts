import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTUSERBINDING_SERVERS = [
	"https://ip-messaging.twilio.com",
];



export class ListUserBindingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=UserSid" })
  userSid: string;
}


export class ListUserBindingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=BindingType" })
  bindingType?: shared.UserBindingEnumBindingTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListUserBindingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListUserBindingRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListUserBindingPathParams;

  @Metadata()
  queryParams: ListUserBindingQueryParams;

  @Metadata()
  security: ListUserBindingSecurity;
}


export class ListUserBindingListUserBindingResponseMeta extends SpeakeasyBase {
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


export class ListUserBindingListUserBindingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=bindings", elemType: shared.IpMessagingV2ServiceUserUserBinding })
  bindings?: shared.IpMessagingV2ServiceUserUserBinding[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListUserBindingListUserBindingResponseMeta;
}


export class ListUserBindingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listUserBindingResponse?: ListUserBindingListUserBindingResponse;

  @Metadata()
  statusCode: number;
}
