import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEIPRECORD_SERVERS: string[];
export declare class CreateIpRecordCreateIpRecordRequest extends SpeakeasyBase {
    cidrPrefixLength?: number;
    friendlyName?: string;
    ipAddress: string;
}
export declare class CreateIpRecordSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateIpRecordRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateIpRecordCreateIpRecordRequest;
    security: CreateIpRecordSecurity;
}
export declare class CreateIpRecordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    voiceV1IpRecord?: shared.VoiceV1IpRecord;
}
