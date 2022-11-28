import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListParticipantConversationServerList = [
	"https://conversations.twilio.com",
] as const;


export class ListParticipantConversationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Address" })
  address?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Identity" })
  identity?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListParticipantConversationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListParticipantConversationListParticipantConversationResponseMeta extends SpeakeasyBase {
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


export class ListParticipantConversationListParticipantConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversations", elemType: shared.ConversationsV1ParticipantConversation })
  conversations?: shared.ConversationsV1ParticipantConversation[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListParticipantConversationListParticipantConversationResponseMeta;
}


export class ListParticipantConversationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListParticipantConversationQueryParams;

  @SpeakeasyMetadata()
  security: ListParticipantConversationSecurity;
}


export class ListParticipantConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listParticipantConversationResponse?: ListParticipantConversationListParticipantConversationResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
