import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateSessionServerList: readonly ["https://proxy.twilio.com"];
export declare class UpdateSessionPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class UpdateSessionUpdateSessionRequest extends SpeakeasyBase {
    dateExpiry?: Date;
    status?: shared.SessionEnumStatusEnum;
    ttl?: number;
}
export declare class UpdateSessionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSessionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSessionPathParams;
    request?: UpdateSessionUpdateSessionRequest;
    security: UpdateSessionSecurity;
}
export declare class UpdateSessionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    proxyV1ServiceSession?: shared.ProxyV1ServiceSession;
}
