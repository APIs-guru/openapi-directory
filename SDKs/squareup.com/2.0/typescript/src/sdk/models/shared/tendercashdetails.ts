import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";
import { Money } from "./money";


// TenderCashDetails
/** 
 * Represents the details of a tender with `type` `CASH`.
**/
export class TenderCashDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=buyer_tendered_money" })
  buyerTenderedMoney?: Money;

  @Metadata({ data: "json, name=change_back_money" })
  changeBackMoney?: Money;
}
