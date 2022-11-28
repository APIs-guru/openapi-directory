import { SpeakeasyBase } from "../../../internal/utils";
import { AutoTopUpConfig2 } from "./autotopupconfig2";
import { Notifications2 } from "./notifications2";
export declare enum SourceAccountResponseV3CurrencyEnum {
    Usd = "USD",
    Eur = "EUR",
    Gbp = "GBP",
    Cad = "CAD",
    Hkd = "HKD"
}
export declare class SourceAccountResponseV3 extends SpeakeasyBase {
    autoTopUpConfig?: AutoTopUpConfig2;
    balance?: number;
    country?: string;
    currency?: SourceAccountResponseV3CurrencyEnum;
    customerId?: string;
    deleted?: boolean;
    deletedAt?: Date;
    fundingRef?: string;
    id: string;
    name?: string;
    notifications?: Notifications2;
    payorId?: string;
    physicalAccountId?: string;
    physicalAccountName?: string;
    pooled?: boolean;
    railsId: string;
    type: string;
    userDeleted?: boolean;
}
