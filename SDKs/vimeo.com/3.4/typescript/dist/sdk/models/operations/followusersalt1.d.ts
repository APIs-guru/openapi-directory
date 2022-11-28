import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FollowUsersAlt1RequestBody extends SpeakeasyBase {
    users: string[];
}
export declare class FollowUsersAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class FollowUsersAlt1Request extends SpeakeasyBase {
    request: FollowUsersAlt1RequestBody;
    security: FollowUsersAlt1Security;
}
export declare class FollowUsersAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
}
