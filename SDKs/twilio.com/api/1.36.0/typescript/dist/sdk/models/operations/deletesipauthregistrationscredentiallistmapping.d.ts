import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETESIPAUTHREGISTRATIONSCREDENTIALLISTMAPPING_SERVERS: string[];
export declare class DeleteSipAuthRegistrationsCredentialListMappingPathParams extends SpeakeasyBase {
    accountSid: string;
    domainSid: string;
    sid: string;
}
export declare class DeleteSipAuthRegistrationsCredentialListMappingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSipAuthRegistrationsCredentialListMappingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSipAuthRegistrationsCredentialListMappingPathParams;
    security: DeleteSipAuthRegistrationsCredentialListMappingSecurity;
}
export declare class DeleteSipAuthRegistrationsCredentialListMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
