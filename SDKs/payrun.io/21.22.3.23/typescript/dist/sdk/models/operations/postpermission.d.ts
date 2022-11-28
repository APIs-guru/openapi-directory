import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostPermissionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PostPermissionRequest extends SpeakeasyBase {
    headers: PostPermissionHeaders;
}
export declare class PostPermissionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    link?: shared.Link;
    statusCode: number;
}
