import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class AuthenticatePathParams extends SpeakeasyBase {
    username: string;
}
export declare class AuthenticateQueryParams extends SpeakeasyBase {
    password: string;
}
export declare class AuthenticateRequest extends SpeakeasyBase {
    pathParams: AuthenticatePathParams;
    queryParams: AuthenticateQueryParams;
}
export declare class AuthenticateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
