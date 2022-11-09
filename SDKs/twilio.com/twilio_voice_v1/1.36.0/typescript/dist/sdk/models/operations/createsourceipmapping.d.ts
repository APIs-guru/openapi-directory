import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATESOURCEIPMAPPING_SERVERS: string[];
export declare class CreateSourceIpMappingCreateSourceIpMappingRequest extends SpeakeasyBase {
    ipRecordSid: string;
    sipDomainSid: string;
}
export declare class CreateSourceIpMappingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSourceIpMappingRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateSourceIpMappingCreateSourceIpMappingRequest;
    security: CreateSourceIpMappingSecurity;
}
export declare class CreateSourceIpMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    voiceV1SourceIpMapping?: shared.VoiceV1SourceIpMapping;
}
