import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PrepaidBalanceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=latestTopUp" })
  latestTopUp?: Date;

  @SpeakeasyMetadata({ data: "json, name=pendingTransaction" })
  pendingTransaction?: boolean;
}
