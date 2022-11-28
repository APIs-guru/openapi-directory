import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectAlt1PathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class GetProjectAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetProjectAlt1Request extends SpeakeasyBase {
    pathParams: GetProjectAlt1PathParams;
    security: GetProjectAlt1Security;
}
export declare class GetProjectAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    project?: shared.Project;
}
