import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IncomeVerificationCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.IncomeVerificationCreateRequest;
}


export class IncomeVerificationCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  incomeVerificationCreateResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
