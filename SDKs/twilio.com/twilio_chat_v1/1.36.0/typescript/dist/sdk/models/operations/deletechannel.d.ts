import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETECHANNEL_SERVERS: string[];
export declare class DeleteChannelPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class DeleteChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteChannelPathParams;
    security: DeleteChannelSecurity;
}
export declare class DeleteChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
