import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubscriptionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=branchId" })
  branchId?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=externalAccountId" })
  externalAccountId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nextBilling" })
  nextBilling?: Date;

  @Metadata({ data: "json, name=ownerId" })
  ownerId?: string;

  @Metadata({ data: "json, name=planCode" })
  planCode?: string;

  @Metadata({ data: "json, name=planState" })
  planState?: number;

  @Metadata({ data: "json, name=referralEnabled" })
  referralEnabled?: boolean;

  @Metadata({ data: "json, name=status" })
  status?: number;
}
