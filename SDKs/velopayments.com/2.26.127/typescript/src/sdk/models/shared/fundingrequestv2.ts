import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FundingRequestV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: number;
}
