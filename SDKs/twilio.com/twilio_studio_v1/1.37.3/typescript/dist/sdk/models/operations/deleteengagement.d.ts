import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteEngagementServerList: readonly ["https://studio.twilio.com"];
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
