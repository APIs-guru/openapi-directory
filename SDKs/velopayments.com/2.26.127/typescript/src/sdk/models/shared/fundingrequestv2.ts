import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FundingRequestV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;
}
