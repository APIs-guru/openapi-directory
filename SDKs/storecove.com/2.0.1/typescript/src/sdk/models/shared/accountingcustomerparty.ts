import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Party } from "./party";
import { PublicIdentifier } from "./publicidentifier";



// AccountingCustomerParty
/** 
 * The customer receiving the invoice.
**/
export class AccountingCustomerParty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=party" })
  party: Party;

  @SpeakeasyMetadata({ data: "json, name=publicIdentifiers", elemType: PublicIdentifier })
  publicIdentifiers?: PublicIdentifier[];
}
