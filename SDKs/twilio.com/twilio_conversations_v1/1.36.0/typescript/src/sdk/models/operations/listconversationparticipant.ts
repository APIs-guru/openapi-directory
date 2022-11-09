import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTCONVERSATIONPARTICIPANT_SERVERS = [
	"https://conversations.twilio.com",
];



export class ListConversationParticipantPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;
}


export class ListConversationParticipantQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListConversationParticipantSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListConversationParticipantRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListConversationParticipantPathParams;

  @Metadata()
  queryParams: ListConversationParticipantQueryParams;

  @Metadata()
  security: ListConversationParticipantSecurity;
}


export class ListConversationParticipantListConversationParticipantResponseMeta extends SpeakeasyBase {
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


export class ListConversationParticipantListConversationParticipantResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListConversationParticipantListConversationParticipantResponseMeta;

  @Metadata({ data: "json, name=participants", elemType: shared.ConversationsV1ConversationConversationParticipant })
  participants?: shared.ConversationsV1ConversationConversationParticipant[];
}


export class ListConversationParticipantResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listConversationParticipantResponse?: ListConversationParticipantListConversationParticipantResponse;

  @Metadata()
  statusCode: number;
}
