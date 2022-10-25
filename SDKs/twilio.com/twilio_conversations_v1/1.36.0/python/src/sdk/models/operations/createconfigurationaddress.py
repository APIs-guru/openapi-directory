from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared
CREATE_CONFIGURATION_ADDRESS_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class CreateConfigurationAddressCreateConfigurationAddressRequest:
    address: str = field(default=None, metadata={'form': { 'field_name': 'Address' }})
    auto_creation_conversation_service_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AutoCreation.ConversationServiceSid' }})
    auto_creation_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'AutoCreation.Enabled' }})
    auto_creation_studio_flow_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AutoCreation.StudioFlowSid' }})
    auto_creation_studio_retry_count: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'AutoCreation.StudioRetryCount' }})
    auto_creation_type: Optional[shared.ConfigurationAddressEnumAutoCreationTypeEnum] = field(default=None, metadata={'form': { 'field_name': 'AutoCreation.Type' }})
    auto_creation_webhook_filters: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'AutoCreation.WebhookFilters' }})
    auto_creation_webhook_method: Optional[shared.ConfigurationAddressEnumMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'AutoCreation.WebhookMethod' }})
    auto_creation_webhook_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AutoCreation.WebhookUrl' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    type: shared.ConfigurationAddressEnumTypeEnum = field(default=None, metadata={'form': { 'field_name': 'Type' }})
    

@dataclass
class CreateConfigurationAddressSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateConfigurationAddressRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateConfigurationAddressCreateConfigurationAddressRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateConfigurationAddressSecurity = field(default=None)
    

@dataclass
class CreateConfigurationAddressResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    conversations_v1_configuration_address: Optional[shared.ConversationsV1ConfigurationAddress] = field(default=None)
    
