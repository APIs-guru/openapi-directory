import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReplyToConversationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class ReplyToConversationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=content" })
  content: string;

  @Metadata({ data: "multipart_form, name=device_pixel_ratio" })
  devicePixelRatio?: number;

  @Metadata({ data: "multipart_form, name=photo_ids" })
  photoIds?: string;
}


export class ReplyToConversationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReplyToConversationPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: ReplyToConversationRequestBody;
}


export class ReplyToConversationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  message?: shared.Message;

  @Metadata()
  statusCode: number;
}
