import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConversationsFetchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversationId" })
  conversationId: string;
}


export class ConversationsFetchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class ConversationsFetchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ConversationsFetchPathParams;

  @Metadata()
  security: ConversationsFetchSecurity;
}


export class ConversationsFetchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  conversationResponse?: shared.ConversationResponse;

  @Metadata()
  statusCode: number;
}
