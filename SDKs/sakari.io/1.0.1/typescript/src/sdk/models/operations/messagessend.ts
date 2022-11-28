import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MessagesSendPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class MessagesSendSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class MessagesSendRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MessagesSendPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.SendMessagesRequest;

  @SpeakeasyMetadata()
  security: MessagesSendSecurity;
}


export class MessagesSendResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sendMessagesResponse?: shared.SendMessagesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
