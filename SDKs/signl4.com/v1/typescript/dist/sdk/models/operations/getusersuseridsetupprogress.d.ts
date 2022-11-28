import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersUserIdSetupProgressPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetUsersUserIdSetupProgressRequest extends SpeakeasyBase {
    pathParams: GetUsersUserIdSetupProgressPathParams;
}
export declare class GetUsersUserIdSetupProgressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
    userSetupProgress?: shared.UserSetupProgress;
}
