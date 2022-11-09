import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PatchUserPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class PatchUserHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PatchUserRequest extends SpeakeasyBase {
    pathParams: PatchUserPathParams;
    headers: PatchUserHeaders;
}
export declare class PatchUserResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    user?: shared.User;
}
