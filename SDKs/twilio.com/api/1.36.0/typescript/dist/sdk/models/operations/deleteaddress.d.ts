import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEADDRESS_SERVERS: string[];
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
