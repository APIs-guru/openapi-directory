import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATESOURCEIPMAPPING_SERVERS: string[];
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
