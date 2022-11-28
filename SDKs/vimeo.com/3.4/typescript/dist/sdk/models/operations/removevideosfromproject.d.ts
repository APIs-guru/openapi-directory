import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveVideosFromProjectPathParams extends SpeakeasyBase {
    projectId: number;
    userId: number;
}
export declare class RemoveVideosFromProjectQueryParams extends SpeakeasyBase {
    shouldDeleteClips?: boolean;
    uris: string;
}
export declare class RemoveVideosFromProjectSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class RemoveVideosFromProjectRequest extends SpeakeasyBase {
    pathParams: RemoveVideosFromProjectPathParams;
    queryParams: RemoveVideosFromProjectQueryParams;
    security: RemoveVideosFromProjectSecurity;
}
export declare class RemoveVideosFromProjectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
}
