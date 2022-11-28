import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateQuoteForPayoutV3PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payoutId" })
  payoutId: string;
}


export class CreateQuoteForPayoutV3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateQuoteForPayoutV3PathParams;
}


export class CreateQuoteForPayoutV3Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  quoteResponseV3?: shared.QuoteResponseV3;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  inlineResponse404?: any;

  @SpeakeasyMetadata()
  inlineResponse409?: any;
}
