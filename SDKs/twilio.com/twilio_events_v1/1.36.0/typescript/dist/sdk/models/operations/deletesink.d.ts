import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETESINK_SERVERS: string[];
export declare class DeleteSinkPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteSinkSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSinkRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSinkPathParams;
    security: DeleteSinkSecurity;
}
export declare class DeleteSinkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
