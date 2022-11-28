import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PlaceComplexBetQueryParams extends SpeakeasyBase {
    exclude?: string[];
    fields?: string[];
    include?: string[];
}
export declare class PlaceComplexBetHeaders extends SpeakeasyBase {
    apiKey: string;
    apiSecret: string;
    apiTicket: string;
}
export declare class PlaceComplexBetRequest extends SpeakeasyBase {
    queryParams: PlaceComplexBetQueryParams;
    headers: PlaceComplexBetHeaders;
    request: shared.ComplexBetRequestBody;
}
export declare class PlaceComplexBetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    betDelayedResponse?: shared.BetDelayed[];
    betPlacedResponse?: shared.BetPlaced[];
    errors?: shared.Errors;
}
