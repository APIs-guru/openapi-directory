import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IncomeVerificationSummaryGetRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.IncomeVerificationSummaryGetRequest;
}


export class IncomeVerificationSummaryGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  incomeVerificationSummaryGetResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
