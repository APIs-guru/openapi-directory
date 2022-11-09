import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SourceAccountV3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency: string;

  @Metadata({ data: "json, name=sourceAccountId" })
  sourceAccountId: string;

  @Metadata({ data: "json, name=sourceAccountName" })
  sourceAccountName: string;

  @Metadata({ data: "json, name=totalPayoutCost" })
  totalPayoutCost: number;
}
