import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WebhooksFetchAllPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class WebhooksFetchAllSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class WebhooksFetchAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WebhooksFetchAllPathParams;

  @SpeakeasyMetadata()
  security: WebhooksFetchAllSecurity;
}


export class WebhooksFetchAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhooksResponse?: shared.WebhooksResponse;
}
