import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEAPP_SERVERS: string[];
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
