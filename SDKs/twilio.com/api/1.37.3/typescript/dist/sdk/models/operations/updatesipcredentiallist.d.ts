import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateSipCredentialListServerList: readonly ["https://api.twilio.com"];
export declare class UpdateSipCredentialListPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class UpdateSipCredentialListUpdateSipCredentialListRequest extends SpeakeasyBase {
    friendlyName: string;
}
export declare class UpdateSipCredentialListSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSipCredentialListRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSipCredentialListPathParams;
    request?: UpdateSipCredentialListUpdateSipCredentialListRequest;
    security: UpdateSipCredentialListSecurity;
}
export declare class UpdateSipCredentialListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountSipSipCredentialList?: shared.ApiV2010AccountSipSipCredentialList;
}
