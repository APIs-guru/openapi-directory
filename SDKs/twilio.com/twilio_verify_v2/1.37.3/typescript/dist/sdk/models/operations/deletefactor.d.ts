import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteFactorServerList: readonly ["https://verify.twilio.com"];
export declare class DeleteFactorPathParams extends SpeakeasyBase {
    identity: string;
    serviceSid: string;
    sid: string;
}
export declare class DeleteFactorSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteFactorRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteFactorPathParams;
    security: DeleteFactorSecurity;
}
export declare class DeleteFactorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
