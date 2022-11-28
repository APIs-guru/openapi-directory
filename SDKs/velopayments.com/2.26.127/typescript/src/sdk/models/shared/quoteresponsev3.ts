import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QuoteFxSummaryV3 } from "./quotefxsummaryv3";



export class QuoteResponseV3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fxSummaries", elemType: QuoteFxSummaryV3 })
  fxSummaries?: QuoteFxSummaryV3[];
}
