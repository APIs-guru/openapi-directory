import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IncomeVerificationPaystubsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.IncomeVerificationPaystubsGetRequest;
}


export class IncomeVerificationPaystubsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  incomeVerificationPaystubsGetResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
