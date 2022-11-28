import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteByocTrunkServerList: readonly ["https://voice.twilio.com"];
export declare class DeleteByocTrunkPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteByocTrunkSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteByocTrunkRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteByocTrunkPathParams;
    security: DeleteByocTrunkSecurity;
}
export declare class DeleteByocTrunkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
