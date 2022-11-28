import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectPathParams extends SpeakeasyBase {
    projectId: number;
    userId: number;
}
export declare class GetProjectSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetProjectRequest extends SpeakeasyBase {
    pathParams: GetProjectPathParams;
    security: GetProjectSecurity;
}
export declare class GetProjectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    project?: shared.Project;
}
