import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckIfUserIsFollowingPathParams extends SpeakeasyBase {
    followUserId: number;
    userId: number;
}
export declare class CheckIfUserIsFollowingRequest extends SpeakeasyBase {
    pathParams: CheckIfUserIsFollowingPathParams;
}
export declare class CheckIfUserIsFollowingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
