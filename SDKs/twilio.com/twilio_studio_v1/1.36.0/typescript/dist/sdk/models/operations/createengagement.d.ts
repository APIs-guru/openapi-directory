import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEENGAGEMENT_SERVERS: string[];
export declare class CreateEngagementPathParams extends SpeakeasyBase {
    flowSid: string;
}
export declare class CreateEngagementCreateEngagementRequest extends SpeakeasyBase {
    from: string;
    parameters?: any;
    to: string;
}
export declare class CreateEngagementSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateEngagementRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateEngagementPathParams;
    request?: CreateEngagementCreateEngagementRequest;
    security: CreateEngagementSecurity;
}
export declare class CreateEngagementResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    studioV1FlowEngagement?: shared.StudioV1FlowEngagement;
}
