import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostListingsSlugFlagPathParams extends SpeakeasyBase {
    slug: string;
}
export declare class PostListingsSlugFlagRequestBody extends SpeakeasyBase {
    description?: string;
    reason: string;
}
export declare class PostListingsSlugFlagRequest extends SpeakeasyBase {
    pathParams: PostListingsSlugFlagPathParams;
    request?: PostListingsSlugFlagRequestBody;
}
export declare class PostListingsSlugFlagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
