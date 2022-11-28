import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IncomeVerificationRefreshRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.IncomeVerificationRefreshRequest;
}


export class IncomeVerificationRefreshResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  incomeVerificationRefreshResponse?: shared.IncomeVerificationRefreshResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
