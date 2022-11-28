import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnlikeVideoPathParams extends SpeakeasyBase {
    userId: number;
    videoId: number;
}
export declare class UnlikeVideoSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class UnlikeVideoRequest extends SpeakeasyBase {
    pathParams: UnlikeVideoPathParams;
    security: UnlikeVideoSecurity;
}
export declare class UnlikeVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
