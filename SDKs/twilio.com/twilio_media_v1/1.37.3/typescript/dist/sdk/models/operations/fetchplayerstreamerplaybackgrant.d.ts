import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchPlayerStreamerPlaybackGrantServerList: readonly ["https://media.twilio.com"];
export declare class FetchPlayerStreamerPlaybackGrantPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchPlayerStreamerPlaybackGrantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchPlayerStreamerPlaybackGrantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchPlayerStreamerPlaybackGrantPathParams;
    security: FetchPlayerStreamerPlaybackGrantSecurity;
}
export declare class FetchPlayerStreamerPlaybackGrantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    mediaV1PlayerStreamerPlayerStreamerPlaybackGrant?: shared.MediaV1PlayerStreamerPlayerStreamerPlaybackGrant;
}
