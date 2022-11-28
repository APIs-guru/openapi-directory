import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BlockConversationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class BlockConversationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BlockConversationPathParams;
}


export class BlockConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
