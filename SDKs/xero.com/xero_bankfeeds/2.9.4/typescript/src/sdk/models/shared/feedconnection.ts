import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CountryCodeEnum } from "./countrycodeenum";
import { CurrencyCodeEnum } from "./currencycodeenum";
import { Error } from "./error";


export enum FeedConnectionStatusEnum {
    Pending = "PENDING",
    Rejected = "REJECTED"
}


// FeedConnection
/** 
 * https://developer.xero.com/documentation/bank-feeds-api/feed-connections
**/
export class FeedConnection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=accountToken" })
  accountToken?: string;

  @SpeakeasyMetadata({ data: "json, name=accountType" })
  accountType?: any;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: CountryCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Error;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: FeedConnectionStatusEnum;
}
