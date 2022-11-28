import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WebhookVerificationKeyGetRequest
/** 
 * WebhookVerificationKeyGetRequest defines the request schema for `/webhook_verification_key/get`
**/
export class WebhookVerificationKeyGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=key_id" })
  keyId: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
