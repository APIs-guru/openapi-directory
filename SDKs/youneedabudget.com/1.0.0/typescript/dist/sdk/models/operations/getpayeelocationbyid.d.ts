import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayeeLocationByIdPathParams extends SpeakeasyBase {
    budgetId: string;
    payeeLocationId: string;
}
export declare class GetPayeeLocationByIdRequest extends SpeakeasyBase {
    pathParams: GetPayeeLocationByIdPathParams;
}
export declare class GetPayeeLocationByIdResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    payeeLocationResponse?: shared.PayeeLocationResponse;
    statusCode: number;
}
