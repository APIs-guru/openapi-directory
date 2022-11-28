import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCategoriesTeamIdMetricsPathParams extends SpeakeasyBase {
    teamId: string;
}
export declare class GetCategoriesTeamIdMetricsRequest extends SpeakeasyBase {
    pathParams: GetCategoriesTeamIdMetricsPathParams;
}
export declare class GetCategoriesTeamIdMetricsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    categoryMetrics?: shared.CategoryMetrics[];
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
