import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEPLAYERSTREAMERPLAYBACKGRANT_SERVERS: string[];
export declare class CreatePlayerStreamerPlaybackGrantPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class CreatePlayerStreamerPlaybackGrantCreatePlayerStreamerPlaybackGrantRequest extends SpeakeasyBase {
    accessControlAllowOrigin?: string;
    ttl?: number;
}
export declare class CreatePlayerStreamerPlaybackGrantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreatePlayerStreamerPlaybackGrantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreatePlayerStreamerPlaybackGrantPathParams;
    request?: CreatePlayerStreamerPlaybackGrantCreatePlayerStreamerPlaybackGrantRequest;
    security: CreatePlayerStreamerPlaybackGrantSecurity;
}
export declare class CreatePlayerStreamerPlaybackGrantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    mediaV1PlayerStreamerPlayerStreamerPlaybackGrant?: shared.MediaV1PlayerStreamerPlayerStreamerPlaybackGrant;
}
