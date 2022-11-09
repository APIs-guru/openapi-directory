import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEFLEXFLOW_SERVERS: string[];
export declare class CreateFlexFlowCreateFlexFlowRequest extends SpeakeasyBase {
    channelType: shared.FlexFlowEnumChannelTypeEnum;
    chatServiceSid: string;
    contactIdentity?: string;
    enabled?: boolean;
    friendlyName: string;
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
export declare class CreateFlexFlowSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateFlexFlowRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateFlexFlowCreateFlexFlowRequest;
    security: CreateFlexFlowSecurity;
}
export declare class CreateFlexFlowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    flexV1FlexFlow?: shared.FlexV1FlexFlow;
}
