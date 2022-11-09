import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSERVICECONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
];



export class ListServiceConversationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;
}


export class ListServiceConversationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListServiceConversationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListServiceConversationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListServiceConversationPathParams;

  @Metadata()
  queryParams: ListServiceConversationQueryParams;

  @Metadata()
  security: ListServiceConversationSecurity;
}


export class ListServiceConversationListServiceConversationResponseMeta extends SpeakeasyBase {
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


export class ListServiceConversationListServiceConversationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversations", elemType: shared.ConversationsV1ServiceServiceConversation })
  conversations?: shared.ConversationsV1ServiceServiceConversation[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListServiceConversationListServiceConversationResponseMeta;
}


export class ListServiceConversationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listServiceConversationResponse?: ListServiceConversationListServiceConversationResponse;

  @Metadata()
  statusCode: number;
}
