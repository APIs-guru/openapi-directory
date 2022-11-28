import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostCommentsIdEditPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostCommentsIdEditQueryParams extends SpeakeasyBase {
    body?: string;
    callback?: string;
    filter?: string;
    preview?: boolean;
    site: string;
}
export declare class PostCommentsIdEditRequest extends SpeakeasyBase {
    pathParams: PostCommentsIdEditPathParams;
    queryParams: PostCommentsIdEditQueryParams;
}
export declare class PostCommentsIdEditResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
