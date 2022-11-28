import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteProjectAlt1PathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class DeleteProjectAlt1QueryParams extends SpeakeasyBase {
    shouldDeleteClips?: boolean;
}
export declare class DeleteProjectAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteProjectAlt1Request extends SpeakeasyBase {
    pathParams: DeleteProjectAlt1PathParams;
    queryParams: DeleteProjectAlt1QueryParams;
    security: DeleteProjectAlt1Security;
}
export declare class DeleteProjectAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
}
