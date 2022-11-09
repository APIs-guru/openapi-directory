import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHSOURCEIPMAPPING_SERVERS: string[];
export declare class FetchSourceIpMappingPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchSourceIpMappingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSourceIpMappingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSourceIpMappingPathParams;
    security: FetchSourceIpMappingSecurity;
}
export declare class FetchSourceIpMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    voiceV1SourceIpMapping?: shared.VoiceV1SourceIpMapping;
}
