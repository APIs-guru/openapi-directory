import { SpeakeasyBase } from "../../../internal/utils";
import { PayeeAddress } from "./payeeaddress";
import { Challenge } from "./challenge";
import { Company } from "./company";
import { IndividualInput } from "./individual";
import { PayeeTypeEnum } from "./payeetypeenum";
export declare class UpdatePayeeDetailsRequestInput extends SpeakeasyBase {
    address?: PayeeAddress;
    challenge?: Challenge;
    company?: Company;
    email?: string;
    individual?: IndividualInput;
    language?: string;
    payeeType?: PayeeTypeEnum;
}
