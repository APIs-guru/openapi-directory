import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateSipCredentialListMappingServerList: readonly ["https://api.twilio.com"];
export declare class CreateSipCredentialListMappingPathParams extends SpeakeasyBase {
    accountSid: string;
    domainSid: string;
}
export declare class CreateSipCredentialListMappingCreateSipCredentialListMappingRequest extends SpeakeasyBase {
    credentialListSid: string;
}
export declare class CreateSipCredentialListMappingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSipCredentialListMappingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateSipCredentialListMappingPathParams;
    request?: CreateSipCredentialListMappingCreateSipCredentialListMappingRequest;
    security: CreateSipCredentialListMappingSecurity;
}
export declare class CreateSipCredentialListMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountSipSipDomainSipCredentialListMapping?: shared.ApiV2010AccountSipSipDomainSipCredentialListMapping;
}
