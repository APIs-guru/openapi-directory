import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FundingRequestV3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: number;

  @Metadata({ data: "json, name=fundingAccountId" })
  fundingAccountId: string;
}
