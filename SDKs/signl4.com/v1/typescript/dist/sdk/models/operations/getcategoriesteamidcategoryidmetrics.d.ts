import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCategoriesTeamIdCategoryIdMetricsPathParams extends SpeakeasyBase {
    categoryId: string;
    teamId: string;
}
export declare class GetCategoriesTeamIdCategoryIdMetricsRequest extends SpeakeasyBase {
    pathParams: GetCategoriesTeamIdCategoryIdMetricsPathParams;
}
export declare class GetCategoriesTeamIdCategoryIdMetricsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    categoryMetrics?: shared.CategoryMetrics;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
