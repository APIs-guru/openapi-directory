import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateEntityServerList: readonly ["https://verify.twilio.com"];
export declare class CreateEntityPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class CreateEntityCreateEntityRequest extends SpeakeasyBase {
    identity: string;
}
export declare class CreateEntitySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateEntityRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateEntityPathParams;
    request?: CreateEntityCreateEntityRequest;
    security: CreateEntitySecurity;
}
export declare class CreateEntityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyV2ServiceEntity?: shared.VerifyV2ServiceEntity;
}
