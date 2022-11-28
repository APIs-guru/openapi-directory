import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveVideoFromProjectAlt1PathParams extends SpeakeasyBase {
    projectId: number;
    videoId: number;
}
export declare class RemoveVideoFromProjectAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class RemoveVideoFromProjectAlt1Request extends SpeakeasyBase {
    pathParams: RemoveVideoFromProjectAlt1PathParams;
    security: RemoveVideoFromProjectAlt1Security;
}
export declare class RemoveVideoFromProjectAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
}
