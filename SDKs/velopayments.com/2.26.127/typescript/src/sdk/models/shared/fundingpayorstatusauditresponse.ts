import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FundingPayorStatusAuditResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=fundingId" })
  fundingId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
