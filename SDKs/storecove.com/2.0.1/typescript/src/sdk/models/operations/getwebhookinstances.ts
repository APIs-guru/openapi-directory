import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWebhookInstancesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  webhookInstance?: any;
}
