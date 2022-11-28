import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteSipIpAccessControlListServerList: readonly ["https://api.twilio.com"];
export declare class DeleteSipIpAccessControlListPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class DeleteSipIpAccessControlListSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSipIpAccessControlListRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSipIpAccessControlListPathParams;
    security: DeleteSipIpAccessControlListSecurity;
}
export declare class DeleteSipIpAccessControlListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
