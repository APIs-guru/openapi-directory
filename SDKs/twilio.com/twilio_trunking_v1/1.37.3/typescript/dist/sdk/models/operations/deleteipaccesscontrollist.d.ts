import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteIpAccessControlListServerList: readonly ["https://trunking.twilio.com"];
export declare class DeleteIpAccessControlListPathParams extends SpeakeasyBase {
    sid: string;
    trunkSid: string;
}
export declare class DeleteIpAccessControlListSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteIpAccessControlListRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteIpAccessControlListPathParams;
    security: DeleteIpAccessControlListSecurity;
}
export declare class DeleteIpAccessControlListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
