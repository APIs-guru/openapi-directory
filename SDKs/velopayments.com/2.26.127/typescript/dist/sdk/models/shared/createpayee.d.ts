import { SpeakeasyBase } from "../../../internal/utils";
import { CreatePayeeAddress } from "./createpayeeaddress";
import { Challenge } from "./challenge";
import { Company } from "./company";
import { CreateIndividual } from "./createindividual";
import { CreatePaymentChannel } from "./createpaymentchannel";
import { PayeeTypeEnum } from "./payeetypeenum";
export declare class CreatePayeeInput extends SpeakeasyBase {
    address: CreatePayeeAddress;
    challenge?: Challenge;
    company?: Company;
    email: string;
    individual?: CreateIndividual;
    language?: string;
    paymentChannel?: CreatePaymentChannel;
    remoteId: string;
    type: PayeeTypeEnum;
}
