import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteTrunkServerList: readonly ["https://trunking.twilio.com"];
export declare class DeleteTrunkPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteTrunkSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteTrunkRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteTrunkPathParams;
    security: DeleteTrunkSecurity;
}
export declare class DeleteTrunkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
