import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayeeLocationsPathParams extends SpeakeasyBase {
    budgetId: string;
}
export declare class GetPayeeLocationsRequest extends SpeakeasyBase {
    pathParams: GetPayeeLocationsPathParams;
}
export declare class GetPayeeLocationsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    payeeLocationsResponse?: shared.PayeeLocationsResponse;
    statusCode: number;
}
