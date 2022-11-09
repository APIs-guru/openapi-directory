import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WebhookVerificationKeyGetRequest
/** 
 * WebhookVerificationKeyGetRequest defines the request schema for `/webhook_verification_key/get`
**/
export class WebhookVerificationKeyGetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=key_id" })
  keyId: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
