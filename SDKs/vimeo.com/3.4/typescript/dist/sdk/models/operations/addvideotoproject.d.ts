import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVideoToProjectPathParams extends SpeakeasyBase {
    projectId: number;
    userId: number;
    videoId: number;
}
export declare class AddVideoToProjectSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class AddVideoToProjectRequest extends SpeakeasyBase {
    pathParams: AddVideoToProjectPathParams;
    security: AddVideoToProjectSecurity;
}
export declare class AddVideoToProjectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
}
