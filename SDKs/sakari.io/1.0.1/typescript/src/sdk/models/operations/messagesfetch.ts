import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MessagesFetchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=messageId" })
  messageId: string;
}


export class MessagesFetchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class MessagesFetchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MessagesFetchPathParams;

  @Metadata()
  security: MessagesFetchSecurity;
}


export class MessagesFetchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  messageResponse?: shared.MessageResponse;

  @Metadata()
  statusCode: number;
}
