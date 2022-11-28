import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UnarchiveConversationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class UnarchiveConversationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnarchiveConversationPathParams;
}


export class UnarchiveConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
