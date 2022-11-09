import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEBYOCTRUNK_SERVERS: string[];
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
