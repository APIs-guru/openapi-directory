import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PublishInvoiceRequest
/** 
 * Describes a `PublishInvoice` request.
**/
export class PublishInvoiceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey?: string;

  @Metadata({ data: "json, name=version" })
  version: number;
}
