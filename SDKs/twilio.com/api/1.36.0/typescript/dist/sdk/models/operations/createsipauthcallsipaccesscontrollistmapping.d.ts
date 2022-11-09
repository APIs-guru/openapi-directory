import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATESIPAUTHCALLSIPACCESSCONTROLLISTMAPPING_SERVERS: string[];
export declare class CreateSipAuthCallsIpAccessControlListMappingPathParams extends SpeakeasyBase {
    accountSid: string;
    domainSid: string;
}
export declare class CreateSipAuthCallsIpAccessControlListMappingCreateSipAuthCallsIpAccessControlListMappingRequest extends SpeakeasyBase {
    ipAccessControlListSid: string;
}
export declare class CreateSipAuthCallsIpAccessControlListMappingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSipAuthCallsIpAccessControlListMappingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateSipAuthCallsIpAccessControlListMappingPathParams;
    request?: CreateSipAuthCallsIpAccessControlListMappingCreateSipAuthCallsIpAccessControlListMappingRequest;
    security: CreateSipAuthCallsIpAccessControlListMappingSecurity;
}
export declare class CreateSipAuthCallsIpAccessControlListMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping?: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping;
}
