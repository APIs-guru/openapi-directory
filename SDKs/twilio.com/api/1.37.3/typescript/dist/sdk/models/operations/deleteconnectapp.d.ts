import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteConnectAppServerList: readonly ["https://api.twilio.com"];
export declare class DeleteConnectAppPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class DeleteConnectAppSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteConnectAppRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteConnectAppPathParams;
    security: DeleteConnectAppSecurity;
}
export declare class DeleteConnectAppResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
