import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";


// DeleteInvoiceResponse
/** 
 * Describes a `DeleteInvoice` response.
**/
export class DeleteInvoiceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
