import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSecurityRefreshSecurity extends SpeakeasyBase {
    jwtRefresh: shared.SchemeJwtRefresh;
}
export declare class PostSecurityRefresh200ApplicationJson extends SpeakeasyBase {
    accessToken?: string;
}
export declare class PostSecurityRefresh401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostSecurityRefresh500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostSecurityRefreshRequest extends SpeakeasyBase {
    security: PostSecurityRefreshSecurity;
}
export declare class PostSecurityRefreshResponse extends SpeakeasyBase {
    contentType: string;
    postSecurityRefresh200ApplicationJsonObject?: PostSecurityRefresh200ApplicationJson;
    postSecurityRefresh401ApplicationJsonObject?: PostSecurityRefresh401ApplicationJson;
    postSecurityRefresh500ApplicationJsonObject?: PostSecurityRefresh500ApplicationJson;
    statusCode: number;
}
