import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UnarchiveConversationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class UnarchiveConversationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UnarchiveConversationPathParams;
}


export class UnarchiveConversationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
