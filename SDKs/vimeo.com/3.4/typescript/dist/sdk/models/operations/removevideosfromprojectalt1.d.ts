import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveVideosFromProjectAlt1PathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class RemoveVideosFromProjectAlt1QueryParams extends SpeakeasyBase {
    shouldDeleteClips?: boolean;
    uris: string;
}
export declare class RemoveVideosFromProjectAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class RemoveVideosFromProjectAlt1Request extends SpeakeasyBase {
    pathParams: RemoveVideosFromProjectAlt1PathParams;
    queryParams: RemoveVideosFromProjectAlt1QueryParams;
    security: RemoveVideosFromProjectAlt1Security;
}
export declare class RemoveVideosFromProjectAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
}
