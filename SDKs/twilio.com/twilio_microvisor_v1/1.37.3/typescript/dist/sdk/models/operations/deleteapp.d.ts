import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteAppServerList: readonly ["https://microvisor.twilio.com"];
export declare class DeleteAppPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteAppSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteAppRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteAppPathParams;
    security: DeleteAppSecurity;
}
export declare class DeleteAppResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
