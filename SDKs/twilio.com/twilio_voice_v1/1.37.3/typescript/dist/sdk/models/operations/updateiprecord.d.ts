import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateIpRecordServerList: readonly ["https://voice.twilio.com"];
export declare class UpdateIpRecordPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateIpRecordUpdateIpRecordRequest extends SpeakeasyBase {
    friendlyName?: string;
}
export declare class UpdateIpRecordSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateIpRecordRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateIpRecordPathParams;
    request?: UpdateIpRecordUpdateIpRecordRequest;
    security: UpdateIpRecordSecurity;
}
export declare class UpdateIpRecordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    voiceV1IpRecord?: shared.VoiceV1IpRecord;
}
