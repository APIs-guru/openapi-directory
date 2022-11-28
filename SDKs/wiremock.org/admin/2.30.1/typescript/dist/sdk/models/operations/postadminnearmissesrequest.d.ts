import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAdminNearMissesRequestRequestBody extends SpeakeasyBase {
    absoluteUrl?: string;
    body?: string;
    cookies?: Map<string, any>;
    headers?: Map<string, any>;
    method?: string;
    url?: string;
}
export declare class PostAdminNearMissesRequest200ApplicationJsonNearMisses extends SpeakeasyBase {
    absoluteUrl?: string;
    body?: string;
    cookies?: Map<string, any>;
    headers?: Map<string, any>;
    method?: string;
    url?: string;
}
export declare class PostAdminNearMissesRequest200ApplicationJson extends SpeakeasyBase {
    nearMisses?: PostAdminNearMissesRequest200ApplicationJsonNearMisses[];
}
export declare class PostAdminNearMissesRequestRequest extends SpeakeasyBase {
    request: PostAdminNearMissesRequestRequestBody;
}
export declare class PostAdminNearMissesRequestResponse extends SpeakeasyBase {
    contentType: string;
    postAdminNearMissesRequest200ApplicationJsonObject?: PostAdminNearMissesRequest200ApplicationJson;
    statusCode: number;
}
