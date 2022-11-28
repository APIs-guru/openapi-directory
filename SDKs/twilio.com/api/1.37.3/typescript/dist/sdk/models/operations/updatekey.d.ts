import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateKeyServerList: readonly ["https://api.twilio.com"];
export declare class UpdateKeyPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class UpdateKeyUpdateKeyRequest extends SpeakeasyBase {
    friendlyName?: string;
}
export declare class UpdateKeySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateKeyRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateKeyPathParams;
    request?: UpdateKeyUpdateKeyRequest;
    security: UpdateKeySecurity;
}
export declare class UpdateKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountKey?: shared.ApiV2010AccountKey;
}
