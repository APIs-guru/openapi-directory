import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTUSERCONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
];



export class ListUserConversationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=UserSid" })
  userSid: string;
}


export class ListUserConversationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListUserConversationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListUserConversationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListUserConversationPathParams;

  @Metadata()
  queryParams: ListUserConversationQueryParams;

  @Metadata()
  security: ListUserConversationSecurity;
}


export class ListUserConversationListUserConversationResponseMeta extends SpeakeasyBase {
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


export class ListUserConversationListUserConversationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversations", elemType: shared.ConversationsV1UserUserConversation })
  conversations?: shared.ConversationsV1UserUserConversation[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListUserConversationListUserConversationResponseMeta;
}


export class ListUserConversationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listUserConversationResponse?: ListUserConversationListUserConversationResponse;

  @Metadata()
  statusCode: number;
}
