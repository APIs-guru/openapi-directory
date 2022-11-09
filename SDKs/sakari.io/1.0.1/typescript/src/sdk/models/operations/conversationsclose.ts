import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConversationsClosePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversationId" })
  conversationId: string;
}


export class ConversationsCloseSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class ConversationsCloseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ConversationsClosePathParams;

  @Metadata()
  security: ConversationsCloseSecurity;
}


export class ConversationsCloseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  conversationResponse?: shared.ConversationResponse;

  @Metadata()
  statusCode: number;
}
