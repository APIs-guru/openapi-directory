import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteConfigurationAddressServerList: readonly ["https://conversations.twilio.com"];
export declare class DeleteConfigurationAddressPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteConfigurationAddressSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteConfigurationAddressRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteConfigurationAddressPathParams;
    security: DeleteConfigurationAddressSecurity;
}
export declare class DeleteConfigurationAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
