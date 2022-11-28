import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteSipAuthCallsCredentialListMappingServerList: readonly ["https://api.twilio.com"];
export declare class DeleteSipAuthCallsCredentialListMappingPathParams extends SpeakeasyBase {
    accountSid: string;
    domainSid: string;
    sid: string;
}
export declare class DeleteSipAuthCallsCredentialListMappingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSipAuthCallsCredentialListMappingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSipAuthCallsCredentialListMappingPathParams;
    security: DeleteSipAuthCallsCredentialListMappingSecurity;
}
export declare class DeleteSipAuthCallsCredentialListMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
