import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SourceAccountV3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=sourceAccountId" })
  sourceAccountId: string;

  @SpeakeasyMetadata({ data: "json, name=sourceAccountName" })
  sourceAccountName: string;

  @SpeakeasyMetadata({ data: "json, name=totalPayoutCost" })
  totalPayoutCost: number;
}
