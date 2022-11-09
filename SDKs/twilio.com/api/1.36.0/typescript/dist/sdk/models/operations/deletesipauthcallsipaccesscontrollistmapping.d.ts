import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETESIPAUTHCALLSIPACCESSCONTROLLISTMAPPING_SERVERS: string[];
export declare class DeleteSipAuthCallsIpAccessControlListMappingPathParams extends SpeakeasyBase {
    accountSid: string;
    domainSid: string;
    sid: string;
}
export declare class DeleteSipAuthCallsIpAccessControlListMappingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSipAuthCallsIpAccessControlListMappingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSipAuthCallsIpAccessControlListMappingPathParams;
    security: DeleteSipAuthCallsIpAccessControlListMappingSecurity;
}
export declare class DeleteSipAuthCallsIpAccessControlListMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
