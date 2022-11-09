import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IncomeVerificationCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.IncomeVerificationCreateRequest;
}


export class IncomeVerificationCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  incomeVerificationCreateResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
