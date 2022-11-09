import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEUSAPPTOPERSON_SERVERS: string[];
export declare class DeleteUsAppToPersonPathParams extends SpeakeasyBase {
    messagingServiceSid: string;
    sid: string;
}
export declare class DeleteUsAppToPersonSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteUsAppToPersonRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteUsAppToPersonPathParams;
    security: DeleteUsAppToPersonSecurity;
}
export declare class DeleteUsAppToPersonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
