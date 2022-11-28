import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUsersIdCategoriesPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostUsersIdCategoriesRequestBody extends SpeakeasyBase {
    colour?: string;
    parentId?: number;
    title: string;
}
export declare class PostUsersIdCategoriesRequest extends SpeakeasyBase {
    pathParams: PostUsersIdCategoriesPathParams;
    request?: PostUsersIdCategoriesRequestBody;
}
export declare class PostUsersIdCategoriesResponse extends SpeakeasyBase {
    category?: shared.Category;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
