import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PrepaidBalanceInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=balance" })
  balance?: number;

  @Metadata({ data: "json, name=latestTopUp" })
  latestTopUp?: Date;

  @Metadata({ data: "json, name=pendingTransaction" })
  pendingTransaction?: boolean;
}
