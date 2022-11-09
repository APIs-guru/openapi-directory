import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteConversationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class DeleteConversationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=message_id" })
  messageId: string;
}


export class DeleteConversationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteConversationPathParams;

  @Metadata()
  queryParams: DeleteConversationQueryParams;
}


export class DeleteConversationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
