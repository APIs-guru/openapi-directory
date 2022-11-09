import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostMyConversationsConversationIdMessagesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class PostMyConversationsConversationIdMessagesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;
}


export class PostMyConversationsConversationIdMessagesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyConversationsConversationIdMessagesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostMyConversationsConversationIdMessagesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostMyConversationsConversationIdMessagesRequestBody;

  @Metadata()
  security: PostMyConversationsConversationIdMessagesSecurity;
}


export class PostMyConversationsConversationIdMessagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
