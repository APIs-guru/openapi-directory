import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SandboxIncomeFireWebhookResponse
/** 
 * SandboxIncomeFireWebhookResponse defines the response schema for `/sandbox/income/fire_webhook`
**/
export class SandboxIncomeFireWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId: string;
}
