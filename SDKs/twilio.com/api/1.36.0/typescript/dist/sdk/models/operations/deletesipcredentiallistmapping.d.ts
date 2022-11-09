import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETESIPCREDENTIALLISTMAPPING_SERVERS: string[];
export declare class DeleteSipCredentialListMappingPathParams extends SpeakeasyBase {
    accountSid: string;
    domainSid: string;
    sid: string;
}
export declare class DeleteSipCredentialListMappingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSipCredentialListMappingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSipCredentialListMappingPathParams;
    security: DeleteSipCredentialListMappingSecurity;
}
export declare class DeleteSipCredentialListMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
