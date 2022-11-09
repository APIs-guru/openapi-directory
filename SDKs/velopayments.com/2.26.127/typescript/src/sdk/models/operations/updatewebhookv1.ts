import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateWebhookV1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=webhookId" })
  webhookId: string;
}


export class UpdateWebhookV1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateWebhookV1PathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.UpdateWebhookRequest;
}


export class UpdateWebhookV1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse400?: any;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse403?: any;

  @Metadata()
  inlineResponse404?: any;
}
