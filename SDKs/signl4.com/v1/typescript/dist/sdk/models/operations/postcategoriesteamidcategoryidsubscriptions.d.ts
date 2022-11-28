import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCategoriesTeamIdCategoryIdSubscriptionsPathParams extends SpeakeasyBase {
    categoryId: string;
    teamId: string;
}
export declare class PostCategoriesTeamIdCategoryIdSubscriptionsRequests extends SpeakeasyBase {
    categorySubscriptionInfos?: shared.CategorySubscriptionInfo[];
    categorySubscriptionInfos1?: shared.CategorySubscriptionInfo[];
    categorySubscriptionInfos2?: shared.CategorySubscriptionInfo[];
    categorySubscriptionInfos3?: shared.CategorySubscriptionInfo[];
}
export declare class PostCategoriesTeamIdCategoryIdSubscriptionsRequest extends SpeakeasyBase {
    pathParams: PostCategoriesTeamIdCategoryIdSubscriptionsPathParams;
    request?: PostCategoriesTeamIdCategoryIdSubscriptionsRequests;
}
export declare class PostCategoriesTeamIdCategoryIdSubscriptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    categorySubscriptionInfos?: shared.CategorySubscriptionInfo[];
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
