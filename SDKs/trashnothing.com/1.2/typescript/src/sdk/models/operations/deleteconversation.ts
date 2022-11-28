import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteConversationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class DeleteConversationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=message_id" })
  messageId: string;
}


export class DeleteConversationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteConversationPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteConversationQueryParams;
}


export class DeleteConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
