import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoTopUpConfig2 } from "./autotopupconfig2";
import { Notifications2 } from "./notifications2";


export enum SourceAccountResponseV3CurrencyEnum {
    Usd = "USD",
    Eur = "EUR",
    Gbp = "GBP",
    Cad = "CAD",
    Hkd = "HKD"
}


export class SourceAccountResponseV3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoTopUpConfig" })
  autoTopUpConfig?: AutoTopUpConfig2;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: SourceAccountResponseV3CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deletedAt" })
  deletedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=fundingRef" })
  fundingRef?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notifications" })
  notifications?: Notifications2;

  @SpeakeasyMetadata({ data: "json, name=payorId" })
  payorId?: string;

  @SpeakeasyMetadata({ data: "json, name=physicalAccountId" })
  physicalAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=physicalAccountName" })
  physicalAccountName?: string;

  @SpeakeasyMetadata({ data: "json, name=pooled" })
  pooled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=railsId" })
  railsId: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=userDeleted" })
  userDeleted?: boolean;
}
