import { SpeakeasyBase } from "../../../internal/utils";
import { SuperFundTypeEnum } from "./superfundtypeenum";
import { ValidationError } from "./validationerror";
export declare class SuperFund extends SpeakeasyBase {
    abn?: string;
    accountName?: string;
    accountNumber?: string;
    bsb?: string;
    electronicServiceAddress?: string;
    employerNumber?: string;
    name?: string;
    spin?: string;
    superFundId?: string;
    type: SuperFundTypeEnum;
    usi?: string;
    updatedDateUtc?: string;
    validationErrors?: ValidationError[];
}
export declare class SuperFundInput extends SpeakeasyBase {
    abn?: string;
    accountName?: string;
    accountNumber?: string;
    bsb?: string;
    electronicServiceAddress?: string;
    employerNumber?: string;
    name?: string;
    spin?: string;
    superFundId?: string;
    type: SuperFundTypeEnum;
    usi?: string;
    validationErrors?: ValidationError[];
}
