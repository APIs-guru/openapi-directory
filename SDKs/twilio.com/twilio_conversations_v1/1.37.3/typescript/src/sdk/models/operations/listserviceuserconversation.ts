import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListServiceUserConversationServerList = [
	"https://conversations.twilio.com",
] as const;


export class ListServiceUserConversationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=UserSid" })
  userSid: string;
}


export class ListServiceUserConversationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListServiceUserConversationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListServiceUserConversationListServiceUserConversationResponseMeta extends SpeakeasyBase {
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


export class ListServiceUserConversationListServiceUserConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversations", elemType: shared.ConversationsV1ServiceServiceUserServiceUserConversation })
  conversations?: shared.ConversationsV1ServiceServiceUserServiceUserConversation[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListServiceUserConversationListServiceUserConversationResponseMeta;
}


export class ListServiceUserConversationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListServiceUserConversationPathParams;

  @SpeakeasyMetadata()
  queryParams: ListServiceUserConversationQueryParams;

  @SpeakeasyMetadata()
  security: ListServiceUserConversationSecurity;
}


export class ListServiceUserConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listServiceUserConversationResponse?: ListServiceUserConversationListServiceUserConversationResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
