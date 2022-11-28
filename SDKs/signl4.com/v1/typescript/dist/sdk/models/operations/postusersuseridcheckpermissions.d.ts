import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUsersUserIdCheckPermissionsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class PostUsersUserIdCheckPermissionsQueryParams extends SpeakeasyBase {
    teamId?: string;
}
export declare class PostUsersUserIdCheckPermissionsRequests extends SpeakeasyBase {
    stringItemsWrapper?: shared.StringItemsWrapper;
    stringItemsWrapper1?: shared.StringItemsWrapper;
    stringItemsWrapper2?: shared.StringItemsWrapper;
    stringItemsWrapper3?: shared.StringItemsWrapper;
}
export declare class PostUsersUserIdCheckPermissionsRequest extends SpeakeasyBase {
    pathParams: PostUsersUserIdCheckPermissionsPathParams;
    queryParams: PostUsersUserIdCheckPermissionsQueryParams;
    request?: PostUsersUserIdCheckPermissionsRequests;
}
export declare class PostUsersUserIdCheckPermissionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
    userImage?: shared.UserImage;
}
