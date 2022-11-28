import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateProjectPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class CreateProjectRequestBody extends SpeakeasyBase {
    name: string;
}
export declare class CreateProjectSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class CreateProjectRequest extends SpeakeasyBase {
    pathParams: CreateProjectPathParams;
    request: CreateProjectRequestBody;
    security: CreateProjectSecurity;
}
export declare class CreateProjectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    project?: shared.Project;
}
