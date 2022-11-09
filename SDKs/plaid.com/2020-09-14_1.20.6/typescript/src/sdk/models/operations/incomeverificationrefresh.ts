import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IncomeVerificationRefreshRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.IncomeVerificationRefreshRequest;
}


export class IncomeVerificationRefreshResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  incomeVerificationRefreshResponse?: shared.IncomeVerificationRefreshResponse;

  @Metadata()
  statusCode: number;
}
