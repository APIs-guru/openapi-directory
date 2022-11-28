import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WebhooksSubscribePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class WebhooksSubscribeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventTypes" })
  eventTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class WebhooksSubscribeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class WebhooksSubscribeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WebhooksSubscribePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: WebhooksSubscribeRequestBody;

  @SpeakeasyMetadata()
  security: WebhooksSubscribeSecurity;
}


export class WebhooksSubscribeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhookResponse?: shared.WebhookResponse;
}
