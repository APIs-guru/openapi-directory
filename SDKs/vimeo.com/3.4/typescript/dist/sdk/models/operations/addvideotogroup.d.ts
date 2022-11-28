import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVideoToGroupPathParams extends SpeakeasyBase {
    groupId: number;
    videoId: number;
}
export declare class AddVideoToGroupSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class AddVideoToGroupRequest extends SpeakeasyBase {
    pathParams: AddVideoToGroupPathParams;
    security: AddVideoToGroupSecurity;
}
export declare class AddVideoToGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    video?: shared.Video;
}
