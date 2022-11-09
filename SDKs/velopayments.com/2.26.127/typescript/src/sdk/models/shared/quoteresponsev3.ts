import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { QuoteFxSummaryV3 } from "./quotefxsummaryv3";


export class QuoteResponseV3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=fxSummaries", elemType: shared.QuoteFxSummaryV3 })
  fxSummaries?: QuoteFxSummaryV3[];
}
