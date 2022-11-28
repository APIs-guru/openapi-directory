import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWebhookInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhookInstance?: any;
}
