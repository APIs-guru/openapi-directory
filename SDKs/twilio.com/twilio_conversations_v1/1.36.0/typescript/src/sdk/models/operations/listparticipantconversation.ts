import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTPARTICIPANTCONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
];



export class ListParticipantConversationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Address" })
  address?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Identity" })
  identity?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListParticipantConversationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListParticipantConversationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListParticipantConversationQueryParams;

  @Metadata()
  security: ListParticipantConversationSecurity;
}


export class ListParticipantConversationListParticipantConversationResponseMeta extends SpeakeasyBase {
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


export class ListParticipantConversationListParticipantConversationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversations", elemType: shared.ConversationsV1ParticipantConversation })
  conversations?: shared.ConversationsV1ParticipantConversation[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListParticipantConversationListParticipantConversationResponseMeta;
}


export class ListParticipantConversationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listParticipantConversationResponse?: ListParticipantConversationListParticipantConversationResponse;

  @Metadata()
  statusCode: number;
}
