import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCallsRequestBodyOptionsPlayAudio extends SpeakeasyBase {
    announcementId?: string;
}
export declare class PostCallsRequestBodyOptions extends SpeakeasyBase {
    aLegCallerId?: string;
    aLegOnly?: number;
    cancelKey?: number;
    connectKey?: number;
    playAudio?: PostCallsRequestBodyOptionsPlayAudio[];
}
export declare class PostCallsRequestBody extends SpeakeasyBase {
    announcementAt?: string;
    announcementId?: string;
    callerId: string;
    from: string;
    hangupAnnouncementId?: string;
    hangupAt?: string;
    options?: PostCallsRequestBodyOptions;
    to: string;
}
export declare class PostCalls202ApplicationJson extends SpeakeasyBase {
    call?: string;
    location?: string;
}
export declare class PostCallsRequest extends SpeakeasyBase {
    request: PostCallsRequestBody;
}
export declare class PostCallsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    postCalls202ApplicationJsonObject?: PostCalls202ApplicationJson;
    statusCode: number;
    oneannouncementsPostResponses400ContentApplication1jsonSchema?: shared.OneannouncementsPostResponses400ContentApplication1jsonSchema;
    oneannouncementsPostResponses403ContentApplication1jsonSchema?: shared.OneannouncementsPostResponses403ContentApplication1jsonSchema;
}
