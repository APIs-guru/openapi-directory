import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditProjectPathParams extends SpeakeasyBase {
    projectId: number;
    userId: number;
}
export declare class EditProjectRequestBody extends SpeakeasyBase {
    name: string;
}
export declare class EditProjectSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class EditProjectRequest extends SpeakeasyBase {
    pathParams: EditProjectPathParams;
    request: EditProjectRequestBody;
    security: EditProjectSecurity;
}
export declare class EditProjectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    project?: shared.Project;
}
