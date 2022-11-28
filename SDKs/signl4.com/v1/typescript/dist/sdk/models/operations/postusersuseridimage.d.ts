import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUsersUserIdImagePathParams extends SpeakeasyBase {
    userId: string;
}
export declare class PostUsersUserIdImageRequest extends SpeakeasyBase {
    pathParams: PostUsersUserIdImagePathParams;
}
export declare class PostUsersUserIdImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
