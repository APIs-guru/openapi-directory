import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostLogSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class PostLog201ApplicationJson extends SpeakeasyBase {
    id?: string;
    result?: shared.LogRestApiPost;
}
export declare class PostLog400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostLog401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostLog422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostLog500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostLogRequest extends SpeakeasyBase {
    request: shared.LogRestApiPost;
    security: PostLogSecurity;
}
export declare class PostLogResponse extends SpeakeasyBase {
    contentType: string;
    postLog201ApplicationJsonObject?: PostLog201ApplicationJson;
    postLog400ApplicationJsonObject?: PostLog400ApplicationJson;
    postLog401ApplicationJsonObject?: PostLog401ApplicationJson;
    postLog422ApplicationJsonObject?: PostLog422ApplicationJson;
    postLog500ApplicationJsonObject?: PostLog500ApplicationJson;
    statusCode: number;
}
