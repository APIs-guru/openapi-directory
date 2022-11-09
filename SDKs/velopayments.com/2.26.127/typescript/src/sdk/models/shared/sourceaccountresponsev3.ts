import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoTopUpConfig2 } from "./autotopupconfig2";
import { Notifications2 } from "./notifications2";

export enum SourceAccountResponseV3CurrencyEnum {
    Usd = "USD"
,    Eur = "EUR"
,    Gbp = "GBP"
,    Cad = "CAD"
,    Hkd = "HKD"
}


export class SourceAccountResponseV3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoTopUpConfig" })
  autoTopUpConfig?: AutoTopUpConfig2;

  @Metadata({ data: "json, name=balance" })
  balance?: number;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: SourceAccountResponseV3CurrencyEnum;

  @Metadata({ data: "json, name=customerId" })
  customerId?: string;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=deletedAt" })
  deletedAt?: Date;

  @Metadata({ data: "json, name=fundingRef" })
  fundingRef?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notifications" })
  notifications?: Notifications2;

  @Metadata({ data: "json, name=payorId" })
  payorId?: string;

  @Metadata({ data: "json, name=physicalAccountId" })
  physicalAccountId?: string;

  @Metadata({ data: "json, name=physicalAccountName" })
  physicalAccountName?: string;

  @Metadata({ data: "json, name=pooled" })
  pooled?: boolean;

  @Metadata({ data: "json, name=railsId" })
  railsId: string;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=userDeleted" })
  userDeleted?: boolean;
}
