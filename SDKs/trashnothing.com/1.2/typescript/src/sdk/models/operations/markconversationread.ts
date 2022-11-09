import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MarkConversationReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class MarkConversationReadRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=message_id" })
  messageId: string;
}


export class MarkConversationReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MarkConversationReadPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: MarkConversationReadRequestBody;
}


export class MarkConversationReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
