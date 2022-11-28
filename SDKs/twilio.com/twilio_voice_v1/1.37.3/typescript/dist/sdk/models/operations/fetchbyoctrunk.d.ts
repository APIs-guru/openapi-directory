import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchByocTrunkServerList: readonly ["https://voice.twilio.com"];
export declare class FetchByocTrunkPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchByocTrunkSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchByocTrunkRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchByocTrunkPathParams;
    security: FetchByocTrunkSecurity;
}
export declare class FetchByocTrunkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    voiceV1ByocTrunk?: shared.VoiceV1ByocTrunk;
}
