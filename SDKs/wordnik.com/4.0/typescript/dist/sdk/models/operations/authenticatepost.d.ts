import { SpeakeasyBase } from "../../../internal/utils";
export declare class AuthenticatePostPathParams extends SpeakeasyBase {
    username: string;
}
export declare class AuthenticatePostRequest extends SpeakeasyBase {
    pathParams: AuthenticatePostPathParams;
    request: string;
}
export declare class AuthenticatePostResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
