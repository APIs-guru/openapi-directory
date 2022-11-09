import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEFLEXFLOW_SERVERS: string[];
export declare class UpdateFlexFlowPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateFlexFlowUpdateFlexFlowRequest extends SpeakeasyBase {
    channelType?: shared.FlexFlowEnumChannelTypeEnum;
    chatServiceSid?: string;
    contactIdentity?: string;
    enabled?: boolean;
    friendlyName?: string;
    integrationChannel?: string;
    integrationCreationOnMessage?: boolean;
    integrationFlowSid?: string;
    integrationPriority?: number;
    integrationRetryCount?: number;
    integrationTimeout?: number;
    integrationUrl?: string;
    integrationWorkflowSid?: string;
    integrationWorkspaceSid?: string;
    integrationType?: shared.FlexFlowEnumIntegrationTypeEnum;
    janitorEnabled?: boolean;
    longLived?: boolean;
}
export declare class UpdateFlexFlowSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateFlexFlowRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateFlexFlowPathParams;
    request?: UpdateFlexFlowUpdateFlexFlowRequest;
    security: UpdateFlexFlowSecurity;
}
export declare class UpdateFlexFlowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    flexV1FlexFlow?: shared.FlexV1FlexFlow;
}
