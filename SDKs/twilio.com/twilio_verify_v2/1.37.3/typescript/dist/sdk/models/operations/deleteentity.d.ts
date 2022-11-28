import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteEntityServerList: readonly ["https://verify.twilio.com"];
export declare class DeleteEntityPathParams extends SpeakeasyBase {
    identity: string;
    serviceSid: string;
}
export declare class DeleteEntitySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteEntityRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteEntityPathParams;
    security: DeleteEntitySecurity;
}
export declare class DeleteEntityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
