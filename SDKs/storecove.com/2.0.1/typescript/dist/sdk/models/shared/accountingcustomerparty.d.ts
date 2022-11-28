import { SpeakeasyBase } from "../../../internal/utils";
import { Party } from "./party";
import { PublicIdentifier } from "./publicidentifier";
/**
 * The customer receiving the invoice.
**/
export declare class AccountingCustomerParty extends SpeakeasyBase {
    accountId?: string;
    party: Party;
    publicIdentifiers?: PublicIdentifier[];
}
