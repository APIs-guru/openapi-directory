import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersUserIdImagePathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetUsersUserIdImageQueryParams extends SpeakeasyBase {
    height?: number;
    width?: number;
}
export declare class GetUsersUserIdImageRequest extends SpeakeasyBase {
    pathParams: GetUsersUserIdImagePathParams;
    queryParams: GetUsersUserIdImageQueryParams;
}
export declare class GetUsersUserIdImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
    userImage?: shared.UserImage;
}
