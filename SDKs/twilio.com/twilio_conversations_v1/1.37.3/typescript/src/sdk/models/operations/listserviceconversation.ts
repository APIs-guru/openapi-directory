import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListServiceConversationServerList = [
	"https://conversations.twilio.com",
] as const;


export class ListServiceConversationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;
}


export class ListServiceConversationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListServiceConversationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListServiceConversationListServiceConversationResponseMeta extends SpeakeasyBase {
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


export class ListServiceConversationListServiceConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversations", elemType: shared.ConversationsV1ServiceServiceConversation })
  conversations?: shared.ConversationsV1ServiceServiceConversation[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListServiceConversationListServiceConversationResponseMeta;
}


export class ListServiceConversationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListServiceConversationPathParams;

  @SpeakeasyMetadata()
  queryParams: ListServiceConversationQueryParams;

  @SpeakeasyMetadata()
  security: ListServiceConversationSecurity;
}


export class ListServiceConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listServiceConversationResponse?: ListServiceConversationListServiceConversationResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
