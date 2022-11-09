import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MarkAllConversationsReadRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=message_id" })
  messageId: string;
}


export class MarkAllConversationsReadRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: MarkAllConversationsReadRequestBody;
}


export class MarkAllConversationsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
