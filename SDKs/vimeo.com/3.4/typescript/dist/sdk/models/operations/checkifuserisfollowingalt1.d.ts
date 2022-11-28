import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckIfUserIsFollowingAlt1PathParams extends SpeakeasyBase {
    followUserId: number;
}
export declare class CheckIfUserIsFollowingAlt1Request extends SpeakeasyBase {
    pathParams: CheckIfUserIsFollowingAlt1PathParams;
}
export declare class CheckIfUserIsFollowingAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
