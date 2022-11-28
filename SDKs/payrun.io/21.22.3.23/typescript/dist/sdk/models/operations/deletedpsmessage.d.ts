import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDpsMessagePathParams extends SpeakeasyBase {
    dpsMessageId: string;
    employerId: string;
}
export declare class DeleteDpsMessageHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteDpsMessageRequest extends SpeakeasyBase {
    pathParams: DeleteDpsMessagePathParams;
    headers: DeleteDpsMessageHeaders;
}
export declare class DeleteDpsMessageResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
