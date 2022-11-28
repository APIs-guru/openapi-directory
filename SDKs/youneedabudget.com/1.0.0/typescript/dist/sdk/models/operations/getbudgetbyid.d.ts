import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBudgetByIdPathParams extends SpeakeasyBase {
    budgetId: string;
}
export declare class GetBudgetByIdQueryParams extends SpeakeasyBase {
    lastKnowledgeOfServer?: number;
}
export declare class GetBudgetByIdRequest extends SpeakeasyBase {
    pathParams: GetBudgetByIdPathParams;
    queryParams: GetBudgetByIdQueryParams;
}
export declare class GetBudgetByIdResponse extends SpeakeasyBase {
    budgetDetailResponse?: shared.BudgetDetailResponse;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
