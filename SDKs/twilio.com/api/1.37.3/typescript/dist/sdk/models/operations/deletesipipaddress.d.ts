import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteSipIpAddressServerList: readonly ["https://api.twilio.com"];
export declare class DeleteSipIpAddressPathParams extends SpeakeasyBase {
    accountSid: string;
    ipAccessControlListSid: string;
    sid: string;
}
export declare class DeleteSipIpAddressSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSipIpAddressRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSipIpAddressPathParams;
    security: DeleteSipIpAddressSecurity;
}
export declare class DeleteSipIpAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
