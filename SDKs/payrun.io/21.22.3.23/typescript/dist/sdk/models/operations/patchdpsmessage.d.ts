import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchDpsMessagePathParams extends SpeakeasyBase {
    dpsMessageId: string;
    employerId: string;
}
export declare class PatchDpsMessageHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PatchDpsMessageRequest extends SpeakeasyBase {
    pathParams: PatchDpsMessagePathParams;
    headers: PatchDpsMessageHeaders;
}
export declare class PatchDpsMessageResponse extends SpeakeasyBase {
    contentType: string;
    dpsMessage?: shared.DpsMessage;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
