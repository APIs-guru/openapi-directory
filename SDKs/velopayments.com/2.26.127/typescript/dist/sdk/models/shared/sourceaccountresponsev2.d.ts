import { SpeakeasyBase } from "../../../internal/utils";
import { AutoTopUpConfig } from "./autotopupconfig";
import { Notifications } from "./notifications";
export declare enum SourceAccountResponseV2CurrencyEnum {
    Usd = "USD"
}
export declare class SourceAccountResponseV2 extends SpeakeasyBase {
    accountType: string;
    autoTopUpConfig?: AutoTopUpConfig;
    balance?: number;
    balanceVisible: boolean;
    currency?: SourceAccountResponseV2CurrencyEnum;
    customerId?: string;
    fundingAccountId?: string;
    fundingRef: string;
    id: string;
    name?: string;
    notifications?: Notifications;
    payorId?: string;
    physicalAccountId?: string;
    physicalAccountName: string;
    pooled: boolean;
    railsId: string;
}
