import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BlockConversationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class BlockConversationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BlockConversationPathParams;
}


export class BlockConversationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
