import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEIPRECORD_SERVERS: string[];
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
