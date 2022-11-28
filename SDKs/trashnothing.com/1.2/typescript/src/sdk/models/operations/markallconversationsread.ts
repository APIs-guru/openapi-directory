import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MarkAllConversationsReadRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=message_id" })
  messageId: string;
}


export class MarkAllConversationsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: MarkAllConversationsReadRequestBody;
}


export class MarkAllConversationsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
