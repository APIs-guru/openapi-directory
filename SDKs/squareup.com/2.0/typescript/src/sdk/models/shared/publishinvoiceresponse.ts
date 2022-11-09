import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { Invoice } from "./invoice";


// PublishInvoiceResponse
/** 
 * Describes a `PublishInvoice` response.
**/
export class PublishInvoiceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=invoice" })
  invoice?: Invoice;
}
