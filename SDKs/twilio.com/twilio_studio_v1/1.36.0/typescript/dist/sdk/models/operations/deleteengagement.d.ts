import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEENGAGEMENT_SERVERS: string[];
export declare class DeleteEngagementPathParams extends SpeakeasyBase {
    flowSid: string;
    sid: string;
}
export declare class DeleteEngagementSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteEngagementRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteEngagementPathParams;
    security: DeleteEngagementSecurity;
}
export declare class DeleteEngagementResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
