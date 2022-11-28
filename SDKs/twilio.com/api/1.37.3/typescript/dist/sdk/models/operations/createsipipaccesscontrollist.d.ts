import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateSipIpAccessControlListServerList: readonly ["https://api.twilio.com"];
export declare class CreateSipIpAccessControlListPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class CreateSipIpAccessControlListCreateSipIpAccessControlListRequest extends SpeakeasyBase {
    friendlyName: string;
}
export declare class CreateSipIpAccessControlListSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSipIpAccessControlListRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateSipIpAccessControlListPathParams;
    request?: CreateSipIpAccessControlListCreateSipIpAccessControlListRequest;
    security: CreateSipIpAccessControlListSecurity;
}
export declare class CreateSipIpAccessControlListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountSipSipIpAccessControlList?: shared.ApiV2010AccountSipSipIpAccessControlList;
}
