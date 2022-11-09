import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSERVICEPARTICIPANTCONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
];



export class ListServiceParticipantConversationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;
}


export class ListServiceParticipantConversationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Address" })
  address?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Identity" })
  identity?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListServiceParticipantConversationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListServiceParticipantConversationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListServiceParticipantConversationPathParams;

  @Metadata()
  queryParams: ListServiceParticipantConversationQueryParams;

  @Metadata()
  security: ListServiceParticipantConversationSecurity;
}


export class ListServiceParticipantConversationListServiceParticipantConversationResponseMeta extends SpeakeasyBase {
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


export class ListServiceParticipantConversationListServiceParticipantConversationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversations", elemType: shared.ConversationsV1ServiceServiceParticipantConversation })
  conversations?: shared.ConversationsV1ServiceServiceParticipantConversation[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListServiceParticipantConversationListServiceParticipantConversationResponseMeta;
}


export class ListServiceParticipantConversationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listServiceParticipantConversationResponse?: ListServiceParticipantConversationListServiceParticipantConversationResponse;

  @Metadata()
  statusCode: number;
}
