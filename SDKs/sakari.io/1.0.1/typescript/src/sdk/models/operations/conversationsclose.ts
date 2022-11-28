import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConversationsClosePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversationId" })
  conversationId: string;
}


export class ConversationsCloseSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class ConversationsCloseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConversationsClosePathParams;

  @SpeakeasyMetadata()
  security: ConversationsCloseSecurity;
}


export class ConversationsCloseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  conversationResponse?: shared.ConversationResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
