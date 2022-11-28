import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchPlayerStreamerServerList: readonly ["https://media.twilio.com"];
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
