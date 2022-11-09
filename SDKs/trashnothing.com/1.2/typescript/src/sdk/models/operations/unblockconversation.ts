import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UnblockConversationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class UnblockConversationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UnblockConversationPathParams;
}


export class UnblockConversationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
