import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTCONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
];



export class ListConversationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListConversationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListConversationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListConversationQueryParams;

  @Metadata()
  security: ListConversationSecurity;
}


export class ListConversationListConversationResponseMeta extends SpeakeasyBase {
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


export class ListConversationListConversationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversations", elemType: shared.ConversationsV1Conversation })
  conversations?: shared.ConversationsV1Conversation[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListConversationListConversationResponseMeta;
}


export class ListConversationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listConversationResponse?: ListConversationListConversationResponse;

  @Metadata()
  statusCode: number;
}
