import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IncomeVerificationPaystubsGetRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.IncomeVerificationPaystubsGetRequest;
}


export class IncomeVerificationPaystubsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  incomeVerificationPaystubsGetResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
