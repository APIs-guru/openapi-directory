import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InvestmentsHoldingsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.InvestmentsHoldingsGetRequest;
}


export class InvestmentsHoldingsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  investmentsHoldingsGetResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
