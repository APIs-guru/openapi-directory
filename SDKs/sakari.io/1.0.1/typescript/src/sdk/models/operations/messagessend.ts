import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MessagesSendPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class MessagesSendSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class MessagesSendRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MessagesSendPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.SendMessagesRequest;

  @Metadata()
  security: MessagesSendSecurity;
}


export class MessagesSendResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sendMessagesResponse?: shared.SendMessagesResponse;

  @Metadata()
  statusCode: number;
}
