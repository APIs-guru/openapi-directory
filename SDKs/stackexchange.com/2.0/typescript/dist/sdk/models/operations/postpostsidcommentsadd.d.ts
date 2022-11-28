import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPostsIdCommentsAddPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostPostsIdCommentsAddQueryParams extends SpeakeasyBase {
    body?: string;
    callback?: string;
    filter?: string;
    preview?: boolean;
    site: string;
}
export declare class PostPostsIdCommentsAddRequest extends SpeakeasyBase {
    pathParams: PostPostsIdCommentsAddPathParams;
    queryParams: PostPostsIdCommentsAddQueryParams;
}
export declare class PostPostsIdCommentsAddResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
