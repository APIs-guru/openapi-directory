import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateSourceIpMappingServerList: readonly ["https://voice.twilio.com"];
export declare class UpdateSourceIpMappingPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateSourceIpMappingUpdateSourceIpMappingRequest extends SpeakeasyBase {
    sipDomainSid: string;
}
export declare class UpdateSourceIpMappingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSourceIpMappingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSourceIpMappingPathParams;
    request?: UpdateSourceIpMappingUpdateSourceIpMappingRequest;
    security: UpdateSourceIpMappingSecurity;
}
export declare class UpdateSourceIpMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    voiceV1SourceIpMapping?: shared.VoiceV1SourceIpMapping;
}
