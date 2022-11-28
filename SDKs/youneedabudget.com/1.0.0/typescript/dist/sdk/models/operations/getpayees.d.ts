import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayeesPathParams extends SpeakeasyBase {
    budgetId: string;
}
export declare class GetPayeesQueryParams extends SpeakeasyBase {
    lastKnowledgeOfServer?: number;
}
export declare class GetPayeesRequest extends SpeakeasyBase {
    pathParams: GetPayeesPathParams;
    queryParams: GetPayeesQueryParams;
}
export declare class GetPayeesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    payeesResponse?: shared.PayeesResponse;
    statusCode: number;
}
