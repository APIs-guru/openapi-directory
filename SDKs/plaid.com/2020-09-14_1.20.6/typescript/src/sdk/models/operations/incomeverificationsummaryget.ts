import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IncomeVerificationSummaryGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.IncomeVerificationSummaryGetRequest;
}


export class IncomeVerificationSummaryGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  incomeVerificationSummaryGetResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
