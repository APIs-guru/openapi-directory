import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PublicIdentifier } from "./publicidentifier";


// InvoiceRecipientPreflight
/** 
 * Identifies the invoice recipient to preflight
**/
export class InvoiceRecipientPreflight extends SpeakeasyBase {
  @Metadata({ data: "json, name=publicIdentifiers", elemType: shared.PublicIdentifier })
  publicIdentifiers?: PublicIdentifier[];
}
