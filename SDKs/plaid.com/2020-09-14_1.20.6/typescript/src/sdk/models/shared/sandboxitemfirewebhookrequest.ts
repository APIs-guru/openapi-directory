import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SandboxItemFireWebhookRequestWebhookCodeEnum {
    DefaultUpdate = "DEFAULT_UPDATE"
}


// SandboxItemFireWebhookRequest
/** 
 * SandboxItemFireWebhookRequest defines the request schema for `/sandbox/item/fire_webhook`
**/
export class SandboxItemFireWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=webhook_code" })
  webhookCode: SandboxItemFireWebhookRequestWebhookCodeEnum;
}
