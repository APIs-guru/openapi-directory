import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEVARIABLE_SERVERS: string[];
export declare class DeleteVariablePathParams extends SpeakeasyBase {
    environmentSid: string;
    serviceSid: string;
    sid: string;
}
export declare class DeleteVariableSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteVariableRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteVariablePathParams;
    security: DeleteVariableSecurity;
}
export declare class DeleteVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
