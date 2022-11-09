import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHPLAYERSTREAMER_SERVERS: string[];
export declare class FetchPlayerStreamerPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchPlayerStreamerSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchPlayerStreamerRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchPlayerStreamerPathParams;
    security: FetchPlayerStreamerSecurity;
}
export declare class FetchPlayerStreamerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    mediaV1PlayerStreamer?: shared.MediaV1PlayerStreamer;
}
