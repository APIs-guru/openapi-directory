import { SpeakeasyBase } from "../../../internal/utils";
import { AccountTypeEnum } from "./accounttypeenum";
export declare class Account extends SpeakeasyBase {
    accountId?: string;
    code?: string;
    name?: string;
    type?: AccountTypeEnum;
}
