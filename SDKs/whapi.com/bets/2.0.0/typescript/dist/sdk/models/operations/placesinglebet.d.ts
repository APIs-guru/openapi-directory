import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PlaceSingleBetQueryParams extends SpeakeasyBase {
    exclude?: string[];
    fields?: string[];
    include?: string[];
}
export declare class PlaceSingleBetHeaders extends SpeakeasyBase {
    apiKey: string;
    apiSecret: string;
    apiTicket: string;
}
export declare class PlaceSingleBetRequest extends SpeakeasyBase {
    queryParams: PlaceSingleBetQueryParams;
    headers: PlaceSingleBetHeaders;
    request: shared.SingleBetRequestBody;
}
export declare class PlaceSingleBetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    betDelayedResponse?: shared.BetDelayed[];
    betPlacedResponse?: shared.BetPlaced[];
    errors?: shared.Errors;
}
