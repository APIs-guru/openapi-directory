import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PayoutCompanyV3 } from "./payoutcompanyv3";
import { PayoutIndividualV3 } from "./payoutindividualv3";



// PayoutPayeeV3
/** 
 * Payee data associated with a payment. Either individual or company must be populated
**/
export class PayoutPayeeV3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=company" })
  company?: PayoutCompanyV3;

  @SpeakeasyMetadata({ data: "json, name=individual" })
  individual?: PayoutIndividualV3;

  @SpeakeasyMetadata({ data: "json, name=payeeId" })
  payeeId: string;
}
