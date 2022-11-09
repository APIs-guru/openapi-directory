import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FundingRequestV1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: number;
}
