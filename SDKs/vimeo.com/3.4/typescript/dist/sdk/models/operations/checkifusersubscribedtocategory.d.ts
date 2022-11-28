import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckIfUserSubscribedToCategoryPathParams extends SpeakeasyBase {
    category: string;
    userId: number;
}
export declare class CheckIfUserSubscribedToCategorySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class CheckIfUserSubscribedToCategoryRequest extends SpeakeasyBase {
    pathParams: CheckIfUserSubscribedToCategoryPathParams;
    security: CheckIfUserSubscribedToCategorySecurity;
}
export declare class CheckIfUserSubscribedToCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
