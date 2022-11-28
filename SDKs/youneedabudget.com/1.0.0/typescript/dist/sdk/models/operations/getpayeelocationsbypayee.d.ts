import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayeeLocationsByPayeePathParams extends SpeakeasyBase {
    budgetId: string;
    payeeId: string;
}
export declare class GetPayeeLocationsByPayeeRequest extends SpeakeasyBase {
    pathParams: GetPayeeLocationsByPayeePathParams;
}
export declare class GetPayeeLocationsByPayeeResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    payeeLocationsResponse?: shared.PayeeLocationsResponse;
    statusCode: number;
}
