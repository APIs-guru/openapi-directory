import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATESTREAMMESSAGE_SERVERS: string[];
export declare class CreateStreamMessagePathParams extends SpeakeasyBase {
    serviceSid: string;
    streamSid: string;
}
export declare class CreateStreamMessageCreateStreamMessageRequest extends SpeakeasyBase {
    data: any;
}
export declare class CreateStreamMessageSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateStreamMessageRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateStreamMessagePathParams;
    request?: CreateStreamMessageCreateStreamMessageRequest;
    security: CreateStreamMessageSecurity;
}
export declare class CreateStreamMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncV1ServiceSyncStreamStreamMessage?: shared.SyncV1ServiceSyncStreamStreamMessage;
}
