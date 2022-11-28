import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Webhook } from "./webhook";



export class WebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Webhook;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
