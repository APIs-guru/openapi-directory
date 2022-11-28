import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateSipCredentialListServerList: readonly ["https://api.twilio.com"];
export declare class CreateSipCredentialListPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class CreateSipCredentialListCreateSipCredentialListRequest extends SpeakeasyBase {
    friendlyName: string;
}
export declare class CreateSipCredentialListSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSipCredentialListRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateSipCredentialListPathParams;
    request?: CreateSipCredentialListCreateSipCredentialListRequest;
    security: CreateSipCredentialListSecurity;
}
export declare class CreateSipCredentialListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountSipSipCredentialList?: shared.ApiV2010AccountSipSipCredentialList;
}
