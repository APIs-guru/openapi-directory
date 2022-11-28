import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ArchiveConversationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class ArchiveConversationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ArchiveConversationPathParams;
}


export class ArchiveConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
