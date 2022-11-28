import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MessagesFetchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=messageId" })
  messageId: string;
}


export class MessagesFetchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class MessagesFetchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MessagesFetchPathParams;

  @SpeakeasyMetadata()
  security: MessagesFetchSecurity;
}


export class MessagesFetchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageResponse?: shared.MessageResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
