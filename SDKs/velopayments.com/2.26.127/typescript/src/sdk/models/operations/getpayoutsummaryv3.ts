import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPayoutSummaryV3PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payoutId" })
  payoutId: string;
}


export class GetPayoutSummaryV3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPayoutSummaryV3PathParams;
}


export class GetPayoutSummaryV3Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  payoutSummaryResponseV3?: shared.PayoutSummaryResponseV3;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  inlineResponse401?: any;

  @SpeakeasyMetadata()
  inlineResponse403?: any;

  @SpeakeasyMetadata()
  inlineResponse404?: any;
}
