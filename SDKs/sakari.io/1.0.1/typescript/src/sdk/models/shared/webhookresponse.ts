import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Webhook } from "./webhook";


export class WebhookResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Webhook;

  @Metadata({ data: "json, name=success" })
  success?: boolean;
}
