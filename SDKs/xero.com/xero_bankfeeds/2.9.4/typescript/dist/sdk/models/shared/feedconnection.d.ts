import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CountryCodeEnum } from "./countrycodeenum";
import { CurrencyCodeEnum } from "./currencycodeenum";
import { Error } from "./error";
export declare enum FeedConnectionStatusEnum {
    Pending = "PENDING",
    Rejected = "REJECTED"
}
/**
 * https://developer.xero.com/documentation/bank-feeds-api/feed-connections
**/
export declare class FeedConnection extends SpeakeasyBase {
    accountId?: string;
    accountName?: string;
    accountNumber?: string;
    accountToken?: string;
    accountType?: any;
    country?: CountryCodeEnum;
    currency?: CurrencyCodeEnum;
    error?: Error;
    id?: string;
    status?: FeedConnectionStatusEnum;
}
