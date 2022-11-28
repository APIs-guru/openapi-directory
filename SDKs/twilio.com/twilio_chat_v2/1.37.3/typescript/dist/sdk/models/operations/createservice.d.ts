import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateServiceServerList: readonly ["https://chat.twilio.com"];
export declare class CreateServiceCreateServiceRequest extends SpeakeasyBase {
    friendlyName: string;
}
export declare class CreateServiceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateServiceRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateServiceCreateServiceRequest;
    security: CreateServiceSecurity;
}
export declare class CreateServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    chatV2Service?: shared.ChatV2Service;
}
