import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FundingRequestV1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;
}
