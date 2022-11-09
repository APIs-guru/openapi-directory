import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConversationMessagesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class GetConversationMessagesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=device_pixel_ratio" })
  devicePixelRatio?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_conversation" })
  includeConversation?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetConversationMessagesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConversationMessagesPathParams;

  @Metadata()
  queryParams: GetConversationMessagesQueryParams;
}


export class GetConversationMessages200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversation" })
  conversation?: shared.Conversation;

  @Metadata({ data: "json, name=messages", elemType: shared.Message })
  messages?: shared.Message[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=per_page" })
  perPage?: number;
}


export class GetConversationMessagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getConversationMessages200ApplicationJsonObject?: GetConversationMessages200ApplicationJson;
}
