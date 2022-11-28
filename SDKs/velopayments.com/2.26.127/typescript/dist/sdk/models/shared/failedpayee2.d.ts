import { SpeakeasyBase } from "../../../internal/utils";
import { CreatePayeeAddress2 } from "./createpayeeaddress2";
import { Challenge2 } from "./challenge2";
import { Company2 } from "./company2";
import { CreateIndividual2 } from "./createindividual2";
import { CreatePaymentChannel2 } from "./createpaymentchannel2";
import { PayeePayorRef } from "./payeepayorref";
import { PayeeTypeEnum } from "./payeetypeenum";
export declare class FailedPayee2 extends SpeakeasyBase {
    address?: CreatePayeeAddress2;
    challenge?: Challenge2;
    company?: Company2;
    email?: string;
    individual?: CreateIndividual2;
    language?: string;
    payeeId?: string;
    paymentChannel?: CreatePaymentChannel2;
    payorRefs?: PayeePayorRef[];
    remoteId?: string;
    type?: PayeeTypeEnum;
}
