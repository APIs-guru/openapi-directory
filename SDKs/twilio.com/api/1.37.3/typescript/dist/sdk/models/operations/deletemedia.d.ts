import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteMediaServerList: readonly ["https://api.twilio.com"];
export declare class DeleteMediaPathParams extends SpeakeasyBase {
    accountSid: string;
    messageSid: string;
    sid: string;
}
export declare class DeleteMediaSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteMediaRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteMediaPathParams;
    security: DeleteMediaSecurity;
}
export declare class DeleteMediaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
