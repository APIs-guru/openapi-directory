import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CountryCodeEnum } from "./countrycodeenum";
import { CurrencyCodeEnum } from "./currencycodeenum";
import { Error } from "./error";

export enum FeedConnectionStatusEnum {
    Pending = "PENDING"
,    Rejected = "REJECTED"
}


// FeedConnection
/** 
 * https://developer.xero.com/documentation/bank-feeds-api/feed-connections
**/
export class FeedConnection extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=accountName" })
  accountName?: string;

  @Metadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @Metadata({ data: "json, name=accountToken" })
  accountToken?: string;

  @Metadata({ data: "json, name=accountType" })
  accountType?: any;

  @Metadata({ data: "json, name=country" })
  country?: CountryCodeEnum;

  @Metadata({ data: "json, name=currency" })
  currency?: CurrencyCodeEnum;

  @Metadata({ data: "json, name=error" })
  error?: Error;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=status" })
  status?: FeedConnectionStatusEnum;
}
