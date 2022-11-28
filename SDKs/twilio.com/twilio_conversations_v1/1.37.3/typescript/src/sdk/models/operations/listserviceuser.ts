import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListServiceUserServerList = [
	"https://conversations.twilio.com",
] as const;


export class ListServiceUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;
}


export class ListServiceUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListServiceUserSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListServiceUserListServiceUserResponseMeta extends SpeakeasyBase {
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


export class ListServiceUserListServiceUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListServiceUserListServiceUserResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=users", elemType: shared.ConversationsV1ServiceServiceUser })
  users?: shared.ConversationsV1ServiceServiceUser[];
}


export class ListServiceUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListServiceUserPathParams;

  @SpeakeasyMetadata()
  queryParams: ListServiceUserQueryParams;

  @SpeakeasyMetadata()
  security: ListServiceUserSecurity;
}


export class ListServiceUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listServiceUserResponse?: ListServiceUserListServiceUserResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
