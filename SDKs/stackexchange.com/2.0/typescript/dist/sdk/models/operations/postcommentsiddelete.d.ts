import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostCommentsIdDeletePathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostCommentsIdDeleteQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    preview?: boolean;
    site: string;
}
export declare class PostCommentsIdDeleteRequest extends SpeakeasyBase {
    pathParams: PostCommentsIdDeletePathParams;
    queryParams: PostCommentsIdDeleteQueryParams;
}
export declare class PostCommentsIdDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
