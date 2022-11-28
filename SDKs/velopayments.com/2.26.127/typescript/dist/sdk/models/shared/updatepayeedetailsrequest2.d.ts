import { SpeakeasyBase } from "../../../internal/utils";
import { PayeeAddress2 } from "./payeeaddress2";
import { Challenge2 } from "./challenge2";
import { Company2 } from "./company2";
import { Individual2Input } from "./individual2";
import { PayeeTypeEnum } from "./payeetypeenum";
export declare class UpdatePayeeDetailsRequest2Input extends SpeakeasyBase {
    address?: PayeeAddress2;
    challenge?: Challenge2;
    company?: Company2;
    email?: string;
    individual?: Individual2Input;
    language?: string;
    payeeType?: PayeeTypeEnum;
}
