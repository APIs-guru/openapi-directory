import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListConversationServerList = [
	"https://conversations.twilio.com",
] as const;


export class ListConversationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListConversationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListConversationListConversationResponseMeta extends SpeakeasyBase {
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


export class ListConversationListConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversations", elemType: shared.ConversationsV1Conversation })
  conversations?: shared.ConversationsV1Conversation[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListConversationListConversationResponseMeta;
}


export class ListConversationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListConversationQueryParams;

  @SpeakeasyMetadata()
  security: ListConversationSecurity;
}


export class ListConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listConversationResponse?: ListConversationListConversationResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
