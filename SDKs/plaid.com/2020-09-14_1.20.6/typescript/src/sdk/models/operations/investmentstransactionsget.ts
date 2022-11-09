import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InvestmentsTransactionsGetRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.InvestmentsTransactionsGetRequest;
}


export class InvestmentsTransactionsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  investmentsTransactionsGetResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
