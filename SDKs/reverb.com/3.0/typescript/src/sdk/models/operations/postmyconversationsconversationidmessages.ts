import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostMyConversationsConversationIdMessagesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class PostMyConversationsConversationIdMessagesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;
}


export class PostMyConversationsConversationIdMessagesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyConversationsConversationIdMessagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostMyConversationsConversationIdMessagesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostMyConversationsConversationIdMessagesRequestBody;

  @SpeakeasyMetadata()
  security: PostMyConversationsConversationIdMessagesSecurity;
}


export class PostMyConversationsConversationIdMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
