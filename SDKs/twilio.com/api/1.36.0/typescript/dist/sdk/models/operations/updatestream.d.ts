import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATESTREAM_SERVERS: string[];
export declare class UpdateStreamPathParams extends SpeakeasyBase {
    accountSid: string;
    callSid: string;
    sid: string;
}
export declare class UpdateStreamUpdateStreamRequest extends SpeakeasyBase {
    status: shared.StreamEnumUpdateStatusEnum;
}
export declare class UpdateStreamSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateStreamRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateStreamPathParams;
    request?: UpdateStreamUpdateStreamRequest;
    security: UpdateStreamSecurity;
}
export declare class UpdateStreamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountCallStream?: shared.ApiV2010AccountCallStream;
}
