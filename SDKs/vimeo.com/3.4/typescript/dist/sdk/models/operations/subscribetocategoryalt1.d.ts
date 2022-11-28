import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SubscribeToCategoryAlt1PathParams extends SpeakeasyBase {
    category: number;
}
export declare class SubscribeToCategoryAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class SubscribeToCategoryAlt1Request extends SpeakeasyBase {
    pathParams: SubscribeToCategoryAlt1PathParams;
    security: SubscribeToCategoryAlt1Security;
}
export declare class SubscribeToCategoryAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
