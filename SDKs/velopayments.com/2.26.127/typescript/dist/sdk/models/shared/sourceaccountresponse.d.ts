import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SourceAccountResponseCurrencyEnum {
    Usd = "USD"
}
export declare class SourceAccountResponse extends SpeakeasyBase {
    accountType?: string;
    balance?: number;
    balanceVisible?: boolean;
    currency?: SourceAccountResponseCurrencyEnum;
    customerId?: string;
    fundingAccountId?: string;
    fundingRef?: string;
    id?: string;
    name?: string;
    payorId?: string;
    physicalAccountId?: string;
    physicalAccountName?: string;
    pooled?: boolean;
    railsId?: string;
}
