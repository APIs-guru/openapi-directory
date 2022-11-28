import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConversationsFetchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversationId" })
  conversationId: string;
}


export class ConversationsFetchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class ConversationsFetchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConversationsFetchPathParams;

  @SpeakeasyMetadata()
  security: ConversationsFetchSecurity;
}


export class ConversationsFetchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  conversationResponse?: shared.ConversationResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
