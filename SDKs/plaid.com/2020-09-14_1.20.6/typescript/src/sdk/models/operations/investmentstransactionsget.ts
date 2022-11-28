import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InvestmentsTransactionsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.InvestmentsTransactionsGetRequest;
}


export class InvestmentsTransactionsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  investmentsTransactionsGetResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
