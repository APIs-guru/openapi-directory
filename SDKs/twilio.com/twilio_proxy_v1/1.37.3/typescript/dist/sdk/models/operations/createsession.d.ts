import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateSessionServerList: readonly ["https://proxy.twilio.com"];
export declare class CreateSessionPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class CreateSessionCreateSessionRequest extends SpeakeasyBase {
    dateExpiry?: Date;
    mode?: shared.SessionEnumModeEnum;
    participants?: any[];
    status?: shared.SessionEnumStatusEnum;
    ttl?: number;
    uniqueName?: string;
}
export declare class CreateSessionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSessionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateSessionPathParams;
    request?: CreateSessionCreateSessionRequest;
    security: CreateSessionSecurity;
}
export declare class CreateSessionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    proxyV1ServiceSession?: shared.ProxyV1ServiceSession;
}
