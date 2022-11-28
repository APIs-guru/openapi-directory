import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FollowUserAlt1PathParams extends SpeakeasyBase {
    followUserId: number;
}
export declare class FollowUserAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class FollowUserAlt1Request extends SpeakeasyBase {
    pathParams: FollowUserAlt1PathParams;
    security: FollowUserAlt1Security;
}
export declare class FollowUserAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
