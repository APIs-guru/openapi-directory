import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LikeVideoPathParams extends SpeakeasyBase {
    userId: number;
    videoId: number;
}
export declare class LikeVideoSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class LikeVideoRequest extends SpeakeasyBase {
    pathParams: LikeVideoPathParams;
    security: LikeVideoSecurity;
}
export declare class LikeVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
