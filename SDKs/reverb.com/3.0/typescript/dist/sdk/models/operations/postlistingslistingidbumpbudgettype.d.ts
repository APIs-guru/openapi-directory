import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostListingsListingIdBumpBudgetTypePathParams extends SpeakeasyBase {
    budgetType: string;
    listingId: string;
}
export declare class PostListingsListingIdBumpBudgetTypeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostListingsListingIdBumpBudgetTypeRequest extends SpeakeasyBase {
    pathParams: PostListingsListingIdBumpBudgetTypePathParams;
    security: PostListingsListingIdBumpBudgetTypeSecurity;
}
export declare class PostListingsListingIdBumpBudgetTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
