import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MarkConversationReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class MarkConversationReadRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=message_id" })
  messageId: string;
}


export class MarkConversationReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MarkConversationReadPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: MarkConversationReadRequestBody;
}


export class MarkConversationReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
