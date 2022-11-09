import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SourceAccountResponseCurrencyEnum {
    Usd = "USD"
}


export class SourceAccountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountType" })
  accountType?: string;

  @Metadata({ data: "json, name=balance" })
  balance?: number;

  @Metadata({ data: "json, name=balanceVisible" })
  balanceVisible?: boolean;

  @Metadata({ data: "json, name=currency" })
  currency?: SourceAccountResponseCurrencyEnum;

  @Metadata({ data: "json, name=customerId" })
  customerId?: string;

  @Metadata({ data: "json, name=fundingAccountId" })
  fundingAccountId?: string;

  @Metadata({ data: "json, name=fundingRef" })
  fundingRef?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=payorId" })
  payorId?: string;

  @Metadata({ data: "json, name=physicalAccountId" })
  physicalAccountId?: string;

  @Metadata({ data: "json, name=physicalAccountName" })
  physicalAccountName?: string;

  @Metadata({ data: "json, name=pooled" })
  pooled?: boolean;

  @Metadata({ data: "json, name=railsId" })
  railsId?: string;
}
