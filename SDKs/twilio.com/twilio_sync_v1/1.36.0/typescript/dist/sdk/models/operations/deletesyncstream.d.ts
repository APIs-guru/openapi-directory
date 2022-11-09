import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETESYNCSTREAM_SERVERS: string[];
export declare class DeleteSyncStreamPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class DeleteSyncStreamSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSyncStreamRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSyncStreamPathParams;
    security: DeleteSyncStreamSecurity;
}
export declare class DeleteSyncStreamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
