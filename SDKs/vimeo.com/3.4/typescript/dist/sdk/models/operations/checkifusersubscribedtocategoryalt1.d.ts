import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckIfUserSubscribedToCategoryAlt1PathParams extends SpeakeasyBase {
    category: string;
}
export declare class CheckIfUserSubscribedToCategoryAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class CheckIfUserSubscribedToCategoryAlt1Request extends SpeakeasyBase {
    pathParams: CheckIfUserSubscribedToCategoryAlt1PathParams;
    security: CheckIfUserSubscribedToCategoryAlt1Security;
}
export declare class CheckIfUserSubscribedToCategoryAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
