import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETECONNECTAPP_SERVERS: string[];
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
