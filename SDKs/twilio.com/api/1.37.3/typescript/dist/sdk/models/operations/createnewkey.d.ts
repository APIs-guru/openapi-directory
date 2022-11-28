import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateNewKeyServerList: readonly ["https://api.twilio.com"];
export declare class CreateNewKeyPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class CreateNewKeyCreateNewKeyRequest extends SpeakeasyBase {
    friendlyName?: string;
}
export declare class CreateNewKeySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateNewKeyRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateNewKeyPathParams;
    request?: CreateNewKeyCreateNewKeyRequest;
    security: CreateNewKeySecurity;
}
export declare class CreateNewKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountNewKey?: shared.ApiV2010AccountNewKey;
}
