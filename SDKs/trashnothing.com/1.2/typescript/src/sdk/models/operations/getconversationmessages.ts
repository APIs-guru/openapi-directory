import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConversationMessagesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class GetConversationMessagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_pixel_ratio" })
  devicePixelRatio?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_conversation" })
  includeConversation?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetConversationMessages200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversation" })
  conversation?: shared.Conversation;

  @SpeakeasyMetadata({ data: "json, name=messages", elemType: shared.Message })
  messages?: shared.Message[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=per_page" })
  perPage?: number;
}


export class GetConversationMessagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetConversationMessagesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetConversationMessagesQueryParams;
}


export class GetConversationMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getConversationMessages200ApplicationJsonObject?: GetConversationMessages200ApplicationJson;
}
