import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSERVICEUSERCONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
];



export class ListServiceUserConversationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=UserSid" })
  userSid: string;
}


export class ListServiceUserConversationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListServiceUserConversationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListServiceUserConversationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListServiceUserConversationPathParams;

  @Metadata()
  queryParams: ListServiceUserConversationQueryParams;

  @Metadata()
  security: ListServiceUserConversationSecurity;
}


export class ListServiceUserConversationListServiceUserConversationResponseMeta extends SpeakeasyBase {
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


export class ListServiceUserConversationListServiceUserConversationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversations", elemType: shared.ConversationsV1ServiceServiceUserServiceUserConversation })
  conversations?: shared.ConversationsV1ServiceServiceUserServiceUserConversation[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListServiceUserConversationListServiceUserConversationResponseMeta;
}


export class ListServiceUserConversationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listServiceUserConversationResponse?: ListServiceUserConversationListServiceUserConversationResponse;

  @Metadata()
  statusCode: number;
}
