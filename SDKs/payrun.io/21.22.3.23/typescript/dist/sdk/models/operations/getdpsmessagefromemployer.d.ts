import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetDpsMessageFromEmployerPathParams extends SpeakeasyBase {
    dpsMessageId: string;
    employerId: string;
}
export declare class GetDpsMessageFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetDpsMessageFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetDpsMessageFromEmployerPathParams;
    headers: GetDpsMessageFromEmployerHeaders;
}
export declare class GetDpsMessageFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    dpsMessage?: shared.DpsMessage;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
