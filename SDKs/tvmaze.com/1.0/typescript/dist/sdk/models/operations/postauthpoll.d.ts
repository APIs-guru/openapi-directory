import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAuthPollRequestBody extends SpeakeasyBase {
    token?: string;
}
export declare class PostAuthPoll200ApplicationJson extends SpeakeasyBase {
    apikey?: string;
    username?: string;
}
export declare class PostAuthPollRequest extends SpeakeasyBase {
    request: PostAuthPollRequestBody;
}
export declare class PostAuthPollResponse extends SpeakeasyBase {
    contentType: string;
    postAuthPoll200ApplicationJsonObject?: PostAuthPoll200ApplicationJson;
    statusCode: number;
}
