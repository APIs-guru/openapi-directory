import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListConversationParticipantServerList = [
	"https://conversations.twilio.com",
] as const;


export class ListConversationParticipantPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;
}


export class ListConversationParticipantQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListConversationParticipantSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListConversationParticipantListConversationParticipantResponseMeta extends SpeakeasyBase {
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


export class ListConversationParticipantListConversationParticipantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListConversationParticipantListConversationParticipantResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=participants", elemType: shared.ConversationsV1ConversationConversationParticipant })
  participants?: shared.ConversationsV1ConversationConversationParticipant[];
}


export class ListConversationParticipantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListConversationParticipantPathParams;

  @SpeakeasyMetadata()
  queryParams: ListConversationParticipantQueryParams;

  @SpeakeasyMetadata()
  security: ListConversationParticipantSecurity;
}


export class ListConversationParticipantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listConversationParticipantResponse?: ListConversationParticipantListConversationParticipantResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
