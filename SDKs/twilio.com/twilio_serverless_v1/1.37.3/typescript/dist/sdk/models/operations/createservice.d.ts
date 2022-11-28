import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateServiceServerList: readonly ["https://serverless.twilio.com"];
export declare class CreateServiceCreateServiceRequest extends SpeakeasyBase {
    friendlyName: string;
    includeCredentials?: boolean;
    uiEditable?: boolean;
    uniqueName: string;
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
    serverlessV1Service?: shared.ServerlessV1Service;
}
