import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAuthStartRequestBody extends SpeakeasyBase {
    email?: string;
    emailConfirmation?: boolean;
}
export declare class PostAuthStart200ApplicationJson extends SpeakeasyBase {
    confirmUrl?: string;
    token?: string;
}
export declare class PostAuthStartRequest extends SpeakeasyBase {
    request: PostAuthStartRequestBody;
}
export declare class PostAuthStartResponse extends SpeakeasyBase {
    contentType: string;
    postAuthStart200ApplicationJsonObject?: PostAuthStart200ApplicationJson;
    statusCode: number;
}
