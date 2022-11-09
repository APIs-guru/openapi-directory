import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEFUNCTION_SERVERS: string[];
export declare class DeleteFunctionPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class DeleteFunctionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteFunctionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteFunctionPathParams;
    security: DeleteFunctionSecurity;
}
export declare class DeleteFunctionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
