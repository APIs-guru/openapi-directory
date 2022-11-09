import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateQuoteForPayoutV3PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payoutId" })
  payoutId: string;
}


export class CreateQuoteForPayoutV3Request extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateQuoteForPayoutV3PathParams;
}


export class CreateQuoteForPayoutV3Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  quoteResponseV3?: shared.QuoteResponseV3;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse404?: any;

  @Metadata()
  inlineResponse409?: any;
}
