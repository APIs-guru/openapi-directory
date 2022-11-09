import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETESIPIPACCESSCONTROLLISTMAPPING_SERVERS: string[];
export declare class DeleteSipIpAccessControlListMappingPathParams extends SpeakeasyBase {
    accountSid: string;
    domainSid: string;
    sid: string;
}
export declare class DeleteSipIpAccessControlListMappingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSipIpAccessControlListMappingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSipIpAccessControlListMappingPathParams;
    security: DeleteSipIpAccessControlListMappingSecurity;
}
export declare class DeleteSipIpAccessControlListMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
