import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostApi10CalculateRequest extends SpeakeasyBase {
    request?: shared.Itinerary[];
}
export declare class PostApi10CalculateResponse extends SpeakeasyBase {
    calculateResults?: shared.CalculateResult[];
    contentType: string;
    statusCode: number;
}
