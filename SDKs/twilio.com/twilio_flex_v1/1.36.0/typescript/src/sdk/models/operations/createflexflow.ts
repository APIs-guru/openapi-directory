import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEFLEXFLOW_SERVERS = [
	"https://flex-api.twilio.com",
];



export class CreateFlexFlowCreateFlexFlowRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=ChannelType;" })
  channelType: shared.FlexFlowEnumChannelTypeEnum;

  @Metadata({ data: "form, name=ChatServiceSid;" })
  chatServiceSid: string;

  @Metadata({ data: "form, name=ContactIdentity;" })
  contactIdentity?: string;

  @Metadata({ data: "form, name=Enabled;" })
  enabled?: boolean;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @Metadata({ data: "form, name=Integration.Channel;" })
  integrationChannel?: string;

  @Metadata({ data: "form, name=Integration.CreationOnMessage;" })
  integrationCreationOnMessage?: boolean;

  @Metadata({ data: "form, name=Integration.FlowSid;" })
  integrationFlowSid?: string;

  @Metadata({ data: "form, name=Integration.Priority;" })
  integrationPriority?: number;

  @Metadata({ data: "form, name=Integration.RetryCount;" })
  integrationRetryCount?: number;

  @Metadata({ data: "form, name=Integration.Timeout;" })
  integrationTimeout?: number;

  @Metadata({ data: "form, name=Integration.Url;" })
  integrationUrl?: string;

  @Metadata({ data: "form, name=Integration.WorkflowSid;" })
  integrationWorkflowSid?: string;

  @Metadata({ data: "form, name=Integration.WorkspaceSid;" })
  integrationWorkspaceSid?: string;

  @Metadata({ data: "form, name=IntegrationType;" })
  integrationType?: shared.FlexFlowEnumIntegrationTypeEnum;

  @Metadata({ data: "form, name=JanitorEnabled;" })
  janitorEnabled?: boolean;

  @Metadata({ data: "form, name=LongLived;" })
  longLived?: boolean;
}


export class CreateFlexFlowSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateFlexFlowRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateFlexFlowCreateFlexFlowRequest;

  @Metadata()
  security: CreateFlexFlowSecurity;
}


export class CreateFlexFlowResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  flexV1FlexFlow?: shared.FlexV1FlexFlow;
}
