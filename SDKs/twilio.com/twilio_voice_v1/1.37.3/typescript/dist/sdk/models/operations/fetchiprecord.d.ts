import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchIpRecordServerList: readonly ["https://voice.twilio.com"];
export declare class FetchIpRecordPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchIpRecordSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchIpRecordRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchIpRecordPathParams;
    security: FetchIpRecordSecurity;
}
export declare class FetchIpRecordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    voiceV1IpRecord?: shared.VoiceV1IpRecord;
}
