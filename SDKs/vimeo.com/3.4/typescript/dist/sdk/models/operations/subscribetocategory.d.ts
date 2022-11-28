import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SubscribeToCategoryPathParams extends SpeakeasyBase {
    category: number;
    userId: number;
}
export declare class SubscribeToCategorySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class SubscribeToCategoryRequest extends SpeakeasyBase {
    pathParams: SubscribeToCategoryPathParams;
    security: SubscribeToCategorySecurity;
}
export declare class SubscribeToCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
