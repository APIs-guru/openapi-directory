import { SpeakeasyBase } from "../../../internal/utils";
export declare class FlagPostPathParams extends SpeakeasyBase {
    postId: string;
}
export declare class FlagPostRequestBody extends SpeakeasyBase {
    details?: string;
    reason: string;
}
export declare class FlagPostRequest extends SpeakeasyBase {
    pathParams: FlagPostPathParams;
    request: FlagPostRequestBody;
}
export declare class FlagPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
