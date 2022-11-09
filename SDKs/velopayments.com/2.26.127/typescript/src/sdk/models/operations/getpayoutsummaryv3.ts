import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPayoutSummaryV3PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payoutId" })
  payoutId: string;
}


export class GetPayoutSummaryV3Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPayoutSummaryV3PathParams;
}


export class GetPayoutSummaryV3Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  payoutSummaryResponseV3?: shared.PayoutSummaryResponseV3;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse403?: any;

  @Metadata()
  inlineResponse404?: any;
}
