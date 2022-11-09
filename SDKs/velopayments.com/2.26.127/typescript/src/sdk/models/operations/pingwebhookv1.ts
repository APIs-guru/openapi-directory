import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PingWebhookV1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=webhookId" })
  webhookId: string;
}


export class PingWebhookV1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: PingWebhookV1PathParams;
}


export class PingWebhookV1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pingResponse?: shared.PingResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse403?: any;

  @Metadata()
  inlineResponse404?: any;
}
