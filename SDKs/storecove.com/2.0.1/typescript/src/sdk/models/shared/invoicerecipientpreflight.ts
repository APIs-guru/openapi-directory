import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublicIdentifier } from "./publicidentifier";



// InvoiceRecipientPreflight
/** 
 * Identifies the invoice recipient to preflight
**/
export class InvoiceRecipientPreflight extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=publicIdentifiers", elemType: PublicIdentifier })
  publicIdentifiers?: PublicIdentifier[];
}
