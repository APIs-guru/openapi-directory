import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetScheduledTransactionByIdPathParams extends SpeakeasyBase {
    budgetId: string;
    scheduledTransactionId: string;
}
export declare class GetScheduledTransactionByIdRequest extends SpeakeasyBase {
    pathParams: GetScheduledTransactionByIdPathParams;
}
export declare class GetScheduledTransactionByIdResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    scheduledTransactionResponse?: shared.ScheduledTransactionResponse;
    statusCode: number;
}
