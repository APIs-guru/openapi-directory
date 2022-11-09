import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SandboxItemFireWebhookRequestWebhookCodeEnum {
    DefaultUpdate = "DEFAULT_UPDATE"
}


// SandboxItemFireWebhookRequest
/** 
 * SandboxItemFireWebhookRequest defines the request schema for `/sandbox/item/fire_webhook`
**/
export class SandboxItemFireWebhookRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=webhook_code" })
  webhookCode: SandboxItemFireWebhookRequestWebhookCodeEnum;
}
