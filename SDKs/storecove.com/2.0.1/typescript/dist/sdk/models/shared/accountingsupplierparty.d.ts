import { SpeakeasyBase } from "../../../internal/utils";
import { SupplierParty } from "./supplierparty";
/**
 * The party sending the invoice. Most data for the AccountingSupplierParty is taken from the Storecove database, where your sender identity resides and has been validated. However, we provide a limited number of fields here that you can specify on an invoice-by-invoice basis.
**/
export declare class AccountingSupplierParty extends SpeakeasyBase {
    party?: SupplierParty;
}
