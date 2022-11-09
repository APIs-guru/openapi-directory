import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class WebhooksFetchAllPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class WebhooksFetchAllSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  sakariAuth: shared.SchemeSakariAuth;
}


export class WebhooksFetchAllRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: WebhooksFetchAllPathParams;

  @Metadata()
  security: WebhooksFetchAllSecurity;
}


export class WebhooksFetchAllResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  webhooksResponse?: shared.WebhooksResponse;
}
