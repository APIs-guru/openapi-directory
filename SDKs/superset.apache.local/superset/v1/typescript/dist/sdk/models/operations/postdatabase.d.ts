import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostDatabaseSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class PostDatabase201ApplicationJson extends SpeakeasyBase {
    id?: number;
    result?: shared.DatabaseRestApiPost;
}
export declare class PostDatabase400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDatabase401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDatabase404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDatabase500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostDatabaseRequest extends SpeakeasyBase {
    request: shared.DatabaseRestApiPost;
    security: PostDatabaseSecurity;
}
export declare class PostDatabaseResponse extends SpeakeasyBase {
    contentType: string;
    postDatabase201ApplicationJsonObject?: PostDatabase201ApplicationJson;
    postDatabase400ApplicationJsonObject?: PostDatabase400ApplicationJson;
    postDatabase401ApplicationJsonObject?: PostDatabase401ApplicationJson;
    postDatabase404ApplicationJsonObject?: PostDatabase404ApplicationJson;
    postDatabase500ApplicationJsonObject?: PostDatabase500ApplicationJson;
    statusCode: number;
}
