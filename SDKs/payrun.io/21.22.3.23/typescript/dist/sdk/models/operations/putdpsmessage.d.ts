import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutDpsMessagePathParams extends SpeakeasyBase {
    dpsMessageId: string;
    employerId: string;
}
export declare class PutDpsMessageHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutDpsMessageRequest extends SpeakeasyBase {
    pathParams: PutDpsMessagePathParams;
    headers: PutDpsMessageHeaders;
}
export declare class PutDpsMessageResponse extends SpeakeasyBase {
    contentType: string;
    dpsMessage?: shared.DpsMessage;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
