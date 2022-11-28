import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReplyToConversationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class ReplyToConversationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=content" })
  content: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=device_pixel_ratio" })
  devicePixelRatio?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=photo_ids" })
  photoIds?: string;
}


export class ReplyToConversationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReplyToConversationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: ReplyToConversationRequestBody;
}


export class ReplyToConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  message?: shared.Message;

  @SpeakeasyMetadata()
  statusCode: number;
}
