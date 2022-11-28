import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateSinkValidateServerList: readonly ["https://events.twilio.com"];
export declare class CreateSinkValidatePathParams extends SpeakeasyBase {
    sid: string;
}
export declare class CreateSinkValidateCreateSinkValidateRequest extends SpeakeasyBase {
    testId: string;
}
export declare class CreateSinkValidateSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSinkValidateRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateSinkValidatePathParams;
    request?: CreateSinkValidateCreateSinkValidateRequest;
    security: CreateSinkValidateSecurity;
}
export declare class CreateSinkValidateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    eventsV1SinkSinkValidate?: shared.EventsV1SinkSinkValidate;
}
