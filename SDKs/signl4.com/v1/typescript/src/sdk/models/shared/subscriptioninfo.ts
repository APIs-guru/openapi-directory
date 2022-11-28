import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SubscriptionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branchId" })
  branchId?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=externalAccountId" })
  externalAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nextBilling" })
  nextBilling?: Date;

  @SpeakeasyMetadata({ data: "json, name=ownerId" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=planCode" })
  planCode?: string;

  @SpeakeasyMetadata({ data: "json, name=planState" })
  planState?: number;

  @SpeakeasyMetadata({ data: "json, name=referralEnabled" })
  referralEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}
