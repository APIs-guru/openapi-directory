import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveVideoFromProjectPathParams extends SpeakeasyBase {
    projectId: number;
    userId: number;
    videoId: number;
}
export declare class RemoveVideoFromProjectSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class RemoveVideoFromProjectRequest extends SpeakeasyBase {
    pathParams: RemoveVideoFromProjectPathParams;
    security: RemoveVideoFromProjectSecurity;
}
export declare class RemoveVideoFromProjectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
}
