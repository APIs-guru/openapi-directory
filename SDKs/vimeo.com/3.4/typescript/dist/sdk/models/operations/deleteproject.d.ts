import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteProjectPathParams extends SpeakeasyBase {
    projectId: number;
    userId: number;
}
export declare class DeleteProjectQueryParams extends SpeakeasyBase {
    shouldDeleteClips?: boolean;
}
export declare class DeleteProjectSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteProjectRequest extends SpeakeasyBase {
    pathParams: DeleteProjectPathParams;
    queryParams: DeleteProjectQueryParams;
    security: DeleteProjectSecurity;
}
export declare class DeleteProjectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
}
