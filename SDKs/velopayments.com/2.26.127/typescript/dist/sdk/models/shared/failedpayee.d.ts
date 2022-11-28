import { SpeakeasyBase } from "../../../internal/utils";
import { CreatePayeeAddress } from "./createpayeeaddress";
import { Challenge } from "./challenge";
import { Company } from "./company";
import { CreateIndividual } from "./createindividual";
import { CreatePaymentChannel } from "./createpaymentchannel";
import { PayeePayorRefV3 } from "./payeepayorrefv3";
import { PayeeTypeEnum } from "./payeetypeenum";
export declare class FailedPayee extends SpeakeasyBase {
    address?: CreatePayeeAddress;
    challenge?: Challenge;
    company?: Company;
    email?: string;
    individual?: CreateIndividual;
    language?: string;
    payeeId?: string;
    paymentChannel?: CreatePaymentChannel;
    payorRefs?: PayeePayorRefV3[];
    remoteId?: string;
    type?: PayeeTypeEnum;
}
