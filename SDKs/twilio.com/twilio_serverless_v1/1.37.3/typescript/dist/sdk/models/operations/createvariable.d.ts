import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateVariableServerList: readonly ["https://serverless.twilio.com"];
export declare class CreateVariablePathParams extends SpeakeasyBase {
    environmentSid: string;
    serviceSid: string;
}
export declare class CreateVariableCreateVariableRequest extends SpeakeasyBase {
    key: string;
    value: string;
}
export declare class CreateVariableSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateVariableRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateVariablePathParams;
    request?: CreateVariableCreateVariableRequest;
    security: CreateVariableSecurity;
}
export declare class CreateVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    serverlessV1ServiceEnvironmentVariable?: shared.ServerlessV1ServiceEnvironmentVariable;
}
