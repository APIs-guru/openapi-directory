import { SpeakeasyBase } from "../../../internal/utils";
import { PayoutCompanyV3 } from "./payoutcompanyv3";
import { PayoutIndividualV3 } from "./payoutindividualv3";
/**
 * Payee data associated with a payment. Either individual or company must be populated
**/
export declare class PayoutPayeeV3 extends SpeakeasyBase {
    company?: PayoutCompanyV3;
    individual?: PayoutIndividualV3;
    payeeId: string;
}
