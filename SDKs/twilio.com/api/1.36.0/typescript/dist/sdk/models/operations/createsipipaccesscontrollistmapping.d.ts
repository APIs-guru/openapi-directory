import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATESIPIPACCESSCONTROLLISTMAPPING_SERVERS: string[];
export declare class CreateSipIpAccessControlListMappingPathParams extends SpeakeasyBase {
    accountSid: string;
    domainSid: string;
}
export declare class CreateSipIpAccessControlListMappingCreateSipIpAccessControlListMappingRequest extends SpeakeasyBase {
    ipAccessControlListSid: string;
}
export declare class CreateSipIpAccessControlListMappingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSipIpAccessControlListMappingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateSipIpAccessControlListMappingPathParams;
    request?: CreateSipIpAccessControlListMappingCreateSipIpAccessControlListMappingRequest;
    security: CreateSipIpAccessControlListMappingSecurity;
}
export declare class CreateSipIpAccessControlListMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountSipSipDomainSipIpAccessControlListMapping?: shared.ApiV2010AccountSipSipDomainSipIpAccessControlListMapping;
}
