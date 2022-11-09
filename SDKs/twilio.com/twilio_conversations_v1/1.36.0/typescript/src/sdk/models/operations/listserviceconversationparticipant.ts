import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSERVICECONVERSATIONPARTICIPANT_SERVERS = [
	"https://conversations.twilio.com",
];



export class ListServiceConversationParticipantPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;
}


export class ListServiceConversationParticipantQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListServiceConversationParticipantSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListServiceConversationParticipantRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListServiceConversationParticipantPathParams;

  @Metadata()
  queryParams: ListServiceConversationParticipantQueryParams;

  @Metadata()
  security: ListServiceConversationParticipantSecurity;
}


export class ListServiceConversationParticipantListServiceConversationParticipantResponseMeta extends SpeakeasyBase {
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


export class ListServiceConversationParticipantListServiceConversationParticipantResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListServiceConversationParticipantListServiceConversationParticipantResponseMeta;

  @Metadata({ data: "json, name=participants", elemType: shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant })
  participants?: shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant[];
}


export class ListServiceConversationParticipantResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listServiceConversationParticipantResponse?: ListServiceConversationParticipantListServiceConversationParticipantResponse;

  @Metadata()
  statusCode: number;
}
