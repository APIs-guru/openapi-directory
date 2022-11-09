import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutUserPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class PutUserHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutUserRequest extends SpeakeasyBase {
    pathParams: PutUserPathParams;
    headers: PutUserHeaders;
}
export declare class PutUserResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    user?: shared.User;
}
