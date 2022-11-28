import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SupplierParty } from "./supplierparty";



// AccountingSupplierParty
/** 
 * The party sending the invoice. Most data for the AccountingSupplierParty is taken from the Storecove database, where your sender identity resides and has been validated. However, we provide a limited number of fields here that you can specify on an invoice-by-invoice basis.
**/
export class AccountingSupplierParty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=party" })
  party?: SupplierParty;
}
