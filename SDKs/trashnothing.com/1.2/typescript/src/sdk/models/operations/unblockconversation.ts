import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UnblockConversationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class UnblockConversationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnblockConversationPathParams;
}


export class UnblockConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
