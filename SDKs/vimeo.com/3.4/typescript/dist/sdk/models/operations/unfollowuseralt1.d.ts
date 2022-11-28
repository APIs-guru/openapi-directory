import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnfollowUserAlt1PathParams extends SpeakeasyBase {
    followUserId: number;
}
export declare class UnfollowUserAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class UnfollowUserAlt1Request extends SpeakeasyBase {
    pathParams: UnfollowUserAlt1PathParams;
    security: UnfollowUserAlt1Security;
}
export declare class UnfollowUserAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
