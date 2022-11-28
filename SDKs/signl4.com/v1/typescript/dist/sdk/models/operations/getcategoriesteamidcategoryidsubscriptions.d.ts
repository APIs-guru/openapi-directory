import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCategoriesTeamIdCategoryIdSubscriptionsPathParams extends SpeakeasyBase {
    categoryId: string;
    teamId: string;
}
export declare class GetCategoriesTeamIdCategoryIdSubscriptionsRequest extends SpeakeasyBase {
    pathParams: GetCategoriesTeamIdCategoryIdSubscriptionsPathParams;
}
export declare class GetCategoriesTeamIdCategoryIdSubscriptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    categorySubscriptionInfos?: shared.CategorySubscriptionInfo[];
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
