import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVideosToProjectPathParams extends SpeakeasyBase {
    projectId: number;
    userId: number;
}
export declare class AddVideosToProjectQueryParams extends SpeakeasyBase {
    uris: string;
}
export declare class AddVideosToProjectSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class AddVideosToProjectRequest extends SpeakeasyBase {
    pathParams: AddVideosToProjectPathParams;
    queryParams: AddVideosToProjectQueryParams;
    security: AddVideosToProjectSecurity;
}
export declare class AddVideosToProjectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
}
