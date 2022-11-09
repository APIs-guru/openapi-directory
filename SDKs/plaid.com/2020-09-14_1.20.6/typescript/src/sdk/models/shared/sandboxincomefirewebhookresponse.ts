import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SandboxIncomeFireWebhookResponse
/** 
 * SandboxIncomeFireWebhookResponse defines the response schema for `/sandbox/income/fire_webhook`
**/
export class SandboxIncomeFireWebhookResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=request_id" })
  requestId: string;
}
