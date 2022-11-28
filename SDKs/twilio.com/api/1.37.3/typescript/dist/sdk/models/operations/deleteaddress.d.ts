import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteAddressServerList: readonly ["https://api.twilio.com"];
export declare class DeleteAddressPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class DeleteAddressSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteAddressRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteAddressPathParams;
    security: DeleteAddressSecurity;
}
export declare class DeleteAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
