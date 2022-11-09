import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FundingPayorStatusAuditResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=fundingId" })
  fundingId?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
