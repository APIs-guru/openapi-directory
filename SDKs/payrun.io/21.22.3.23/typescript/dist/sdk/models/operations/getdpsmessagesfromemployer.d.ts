import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDpsMessagesFromEmployerPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class GetDpsMessagesFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetDpsMessagesFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetDpsMessagesFromEmployerPathParams;
    headers: GetDpsMessagesFromEmployerHeaders;
}
export declare class GetDpsMessagesFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
