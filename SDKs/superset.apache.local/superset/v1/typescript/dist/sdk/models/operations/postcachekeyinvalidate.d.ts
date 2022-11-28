import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCachekeyInvalidateSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class PostCachekeyInvalidate400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostCachekeyInvalidate500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostCachekeyInvalidateRequest extends SpeakeasyBase {
    request: shared.CacheInvalidationRequestSchema;
    security: PostCachekeyInvalidateSecurity;
}
export declare class PostCachekeyInvalidateResponse extends SpeakeasyBase {
    contentType: string;
    postCachekeyInvalidate400ApplicationJsonObject?: PostCachekeyInvalidate400ApplicationJson;
    postCachekeyInvalidate500ApplicationJsonObject?: PostCachekeyInvalidate500ApplicationJson;
    statusCode: number;
}
