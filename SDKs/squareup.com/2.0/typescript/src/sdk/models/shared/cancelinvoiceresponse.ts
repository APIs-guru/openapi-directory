import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { Invoice } from "./invoice";


// CancelInvoiceResponse
/** 
 * The response returned by the `CancelInvoice` request.
**/
export class CancelInvoiceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=invoice" })
  invoice?: Invoice;
}
