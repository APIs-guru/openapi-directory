import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnsubscribeFromCategoryPathParams extends SpeakeasyBase {
    category: string;
    userId: number;
}
export declare class UnsubscribeFromCategorySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class UnsubscribeFromCategoryRequest extends SpeakeasyBase {
    pathParams: UnsubscribeFromCategoryPathParams;
    security: UnsubscribeFromCategorySecurity;
}
export declare class UnsubscribeFromCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
