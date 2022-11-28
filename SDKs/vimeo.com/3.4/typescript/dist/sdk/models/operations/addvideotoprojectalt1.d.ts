import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVideoToProjectAlt1PathParams extends SpeakeasyBase {
    projectId: number;
    videoId: number;
}
export declare class AddVideoToProjectAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class AddVideoToProjectAlt1Request extends SpeakeasyBase {
    pathParams: AddVideoToProjectAlt1PathParams;
    security: AddVideoToProjectAlt1Security;
}
export declare class AddVideoToProjectAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
}
