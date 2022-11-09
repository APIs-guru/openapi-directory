import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class WebhooksSubscribePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class WebhooksSubscribeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventTypes" })
  eventTypes?: string[];

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class WebhooksSubscribeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class WebhooksSubscribeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: WebhooksSubscribePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: WebhooksSubscribeRequestBody;

  @Metadata()
  security: WebhooksSubscribeSecurity;
}


export class WebhooksSubscribeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  webhookResponse?: shared.WebhookResponse;
}
