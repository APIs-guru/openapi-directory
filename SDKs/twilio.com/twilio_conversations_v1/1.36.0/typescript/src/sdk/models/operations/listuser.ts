import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTUSER_SERVERS = [
	"https://conversations.twilio.com",
];



export class ListUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListUserRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListUserQueryParams;

  @Metadata()
  security: ListUserSecurity;
}


export class ListUserListUserResponseMeta extends SpeakeasyBase {
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


export class ListUserListUserResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListUserListUserResponseMeta;

  @Metadata({ data: "json, name=users", elemType: shared.ConversationsV1User })
  users?: shared.ConversationsV1User[];
}


export class ListUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listUserResponse?: ListUserListUserResponse;

  @Metadata()
  statusCode: number;
}
