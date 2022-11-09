import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InvestmentsHoldingsGetRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.InvestmentsHoldingsGetRequest;
}


export class InvestmentsHoldingsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  investmentsHoldingsGetResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
