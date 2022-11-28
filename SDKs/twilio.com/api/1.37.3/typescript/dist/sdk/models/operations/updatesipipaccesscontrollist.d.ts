import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateSipIpAccessControlListServerList: readonly ["https://api.twilio.com"];
export declare class UpdateSipIpAccessControlListPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class UpdateSipIpAccessControlListUpdateSipIpAccessControlListRequest extends SpeakeasyBase {
    friendlyName: string;
}
export declare class UpdateSipIpAccessControlListSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSipIpAccessControlListRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSipIpAccessControlListPathParams;
    request?: UpdateSipIpAccessControlListUpdateSipIpAccessControlListRequest;
    security: UpdateSipIpAccessControlListSecurity;
}
export declare class UpdateSipIpAccessControlListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountSipSipIpAccessControlList?: shared.ApiV2010AccountSipSipIpAccessControlList;
}
