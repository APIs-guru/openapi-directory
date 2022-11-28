import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateQuoteForPayoutV3PathParams extends SpeakeasyBase {
    payoutId: string;
}
export declare class CreateQuoteForPayoutV3Request extends SpeakeasyBase {
    pathParams: CreateQuoteForPayoutV3PathParams;
}
export declare class CreateQuoteForPayoutV3Response extends SpeakeasyBase {
    contentType: string;
    quoteResponseV3?: shared.QuoteResponseV3;
    statusCode: number;
    inlineResponse404?: any;
    inlineResponse409?: any;
}
