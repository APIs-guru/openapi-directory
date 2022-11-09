import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetUserPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetUserHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetUserRequest extends SpeakeasyBase {
    pathParams: GetUserPathParams;
    headers: GetUserHeaders;
}
export declare class GetUserResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    user?: shared.User;
}
