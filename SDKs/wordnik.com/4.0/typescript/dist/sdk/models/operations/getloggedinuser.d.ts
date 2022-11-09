import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetLoggedInUserHeaders extends SpeakeasyBase {
    authToken: string;
}
export declare class GetLoggedInUserRequest extends SpeakeasyBase {
    headers: GetLoggedInUserHeaders;
}
export declare class GetLoggedInUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
