from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_FLEX_FLOW_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class UpdateFlexFlowPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateFlexFlowUpdateFlexFlowRequest:
    channel_type: Optional[shared.FlexFlowEnumChannelTypeEnum] = field(default=None, metadata={'form': { 'field_name': 'ChannelType' }})
    chat_service_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ChatServiceSid' }})
    contact_identity: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ContactIdentity' }})
    enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Enabled' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    integration_channel: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Integration.Channel' }})
    integration_creation_on_message: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Integration.CreationOnMessage' }})
    integration_flow_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Integration.FlowSid' }})
    integration_priority: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Integration.Priority' }})
    integration_retry_count: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Integration.RetryCount' }})
    integration_timeout: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Integration.Timeout' }})
    integration_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Integration.Url' }})
    integration_workflow_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Integration.WorkflowSid' }})
    integration_workspace_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Integration.WorkspaceSid' }})
    integration_type: Optional[shared.FlexFlowEnumIntegrationTypeEnum] = field(default=None, metadata={'form': { 'field_name': 'IntegrationType' }})
    janitor_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'JanitorEnabled' }})
    long_lived: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'LongLived' }})
    

@dataclass
class UpdateFlexFlowSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateFlexFlowRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateFlexFlowPathParams = field(default=None)
    request: Optional[UpdateFlexFlowUpdateFlexFlowRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateFlexFlowSecurity = field(default=None)
    

@dataclass
class UpdateFlexFlowResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    flex_v1_flex_flow: Optional[shared.FlexV1FlexFlow] = field(default=None)
    
