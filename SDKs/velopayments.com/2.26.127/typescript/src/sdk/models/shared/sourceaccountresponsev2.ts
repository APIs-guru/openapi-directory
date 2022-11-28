import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoTopUpConfig } from "./autotopupconfig";
import { Notifications } from "./notifications";


export enum SourceAccountResponseV2CurrencyEnum {
    Usd = "USD"
}


export class SourceAccountResponseV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountType" })
  accountType: string;

  @SpeakeasyMetadata({ data: "json, name=autoTopUpConfig" })
  autoTopUpConfig?: AutoTopUpConfig;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=balanceVisible" })
  balanceVisible: boolean;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: SourceAccountResponseV2CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=fundingAccountId" })
  fundingAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=fundingRef" })
  fundingRef: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notifications" })
  notifications?: Notifications;

  @SpeakeasyMetadata({ data: "json, name=payorId" })
  payorId?: string;

  @SpeakeasyMetadata({ data: "json, name=physicalAccountId" })
  physicalAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=physicalAccountName" })
  physicalAccountName: string;

  @SpeakeasyMetadata({ data: "json, name=pooled" })
  pooled: boolean;

  @SpeakeasyMetadata({ data: "json, name=railsId" })
  railsId: string;
}
