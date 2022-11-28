import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayeeByIdPathParams extends SpeakeasyBase {
    budgetId: string;
    payeeId: string;
}
export declare class GetPayeeByIdRequest extends SpeakeasyBase {
    pathParams: GetPayeeByIdPathParams;
}
export declare class GetPayeeByIdResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    payeeResponse?: shared.PayeeResponse;
    statusCode: number;
}
