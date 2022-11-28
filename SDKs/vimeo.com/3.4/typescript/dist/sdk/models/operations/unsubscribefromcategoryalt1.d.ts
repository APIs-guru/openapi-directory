import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnsubscribeFromCategoryAlt1PathParams extends SpeakeasyBase {
    category: string;
}
export declare class UnsubscribeFromCategoryAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class UnsubscribeFromCategoryAlt1Request extends SpeakeasyBase {
    pathParams: UnsubscribeFromCategoryAlt1PathParams;
    security: UnsubscribeFromCategoryAlt1Security;
}
export declare class UnsubscribeFromCategoryAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
