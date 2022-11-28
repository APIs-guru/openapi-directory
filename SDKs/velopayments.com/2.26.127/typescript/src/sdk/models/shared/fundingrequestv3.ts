import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FundingRequestV3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=fundingAccountId" })
  fundingAccountId: string;
}
