import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ArchiveConversationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class ArchiveConversationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ArchiveConversationPathParams;
}


export class ArchiveConversationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
