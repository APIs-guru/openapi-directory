import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { V1SettlementEntry } from "./v1settlemententry";
import { V1Money } from "./v1money";


// V1Settlement
/** 
 * V1Settlement
**/
export class V1Settlement extends SpeakeasyBase {
  @Metadata({ data: "json, name=bank_account_id" })
  bankAccountId?: string;

  @Metadata({ data: "json, name=entries", elemType: shared.V1SettlementEntry })
  entries?: V1SettlementEntry[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=initiated_at" })
  initiatedAt?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=total_money" })
  totalMoney?: V1Money;
}
