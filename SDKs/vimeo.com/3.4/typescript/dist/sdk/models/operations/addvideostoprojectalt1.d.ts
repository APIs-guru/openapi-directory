import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVideosToProjectAlt1PathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class AddVideosToProjectAlt1QueryParams extends SpeakeasyBase {
    uris: string;
}
export declare class AddVideosToProjectAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class AddVideosToProjectAlt1Request extends SpeakeasyBase {
    pathParams: AddVideosToProjectAlt1PathParams;
    queryParams: AddVideosToProjectAlt1QueryParams;
    security: AddVideosToProjectAlt1Security;
}
export declare class AddVideosToProjectAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
}
