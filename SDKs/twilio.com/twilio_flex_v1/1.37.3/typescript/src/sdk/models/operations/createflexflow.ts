import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateFlexFlowServerList = [
	"https://flex-api.twilio.com",
] as const;


export class CreateFlexFlowCreateFlexFlowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=ChannelType;" })
  channelType: shared.FlexFlowEnumChannelTypeEnum;

  @SpeakeasyMetadata({ data: "form, name=ChatServiceSid;" })
  chatServiceSid: string;

  @SpeakeasyMetadata({ data: "form, name=ContactIdentity;" })
  contactIdentity?: string;

  @SpeakeasyMetadata({ data: "form, name=Enabled;" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @SpeakeasyMetadata({ data: "form, name=Integration.Channel;" })
  integrationChannel?: string;

  @SpeakeasyMetadata({ data: "form, name=Integration.CreationOnMessage;" })
  integrationCreationOnMessage?: boolean;

  @SpeakeasyMetadata({ data: "form, name=Integration.FlowSid;" })
  integrationFlowSid?: string;

  @SpeakeasyMetadata({ data: "form, name=Integration.Priority;" })
  integrationPriority?: number;

  @SpeakeasyMetadata({ data: "form, name=Integration.RetryCount;" })
  integrationRetryCount?: number;

  @SpeakeasyMetadata({ data: "form, name=Integration.Timeout;" })
  integrationTimeout?: number;

  @SpeakeasyMetadata({ data: "form, name=Integration.Url;" })
  integrationUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Integration.WorkflowSid;" })
  integrationWorkflowSid?: string;

  @SpeakeasyMetadata({ data: "form, name=Integration.WorkspaceSid;" })
  integrationWorkspaceSid?: string;

  @SpeakeasyMetadata({ data: "form, name=IntegrationType;" })
  integrationType?: shared.FlexFlowEnumIntegrationTypeEnum;

  @SpeakeasyMetadata({ data: "form, name=JanitorEnabled;" })
  janitorEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=LongLived;" })
  longLived?: boolean;
}


export class CreateFlexFlowSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateFlexFlowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateFlexFlowCreateFlexFlowRequest;

  @SpeakeasyMetadata()
  security: CreateFlexFlowSecurity;
}


export class CreateFlexFlowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  flexV1FlexFlow?: shared.FlexV1FlexFlow;
}
