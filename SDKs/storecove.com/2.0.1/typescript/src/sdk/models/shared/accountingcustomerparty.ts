import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Party } from "./party";
import { PublicIdentifier } from "./publicidentifier";


// AccountingCustomerParty
/** 
 * The customer receiving the invoice.
**/
export class AccountingCustomerParty extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=party" })
  party: Party;

  @Metadata({ data: "json, name=publicIdentifiers", elemType: shared.PublicIdentifier })
  publicIdentifiers?: PublicIdentifier[];
}
