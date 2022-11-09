import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteUserTagPathParams extends SpeakeasyBase {
    tagId: string;
    userId: string;
}
export declare class DeleteUserTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteUserTagRequest extends SpeakeasyBase {
    pathParams: DeleteUserTagPathParams;
    headers: DeleteUserTagHeaders;
}
export declare class DeleteUserTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
