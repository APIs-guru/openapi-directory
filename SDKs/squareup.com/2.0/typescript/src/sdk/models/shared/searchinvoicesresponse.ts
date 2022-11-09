import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { Invoice } from "./invoice";


// SearchInvoicesResponse
/** 
 * Describes a `SearchInvoices` response.
**/
export class SearchInvoicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=invoices", elemType: shared.Invoice })
  invoices?: Invoice[];
}
