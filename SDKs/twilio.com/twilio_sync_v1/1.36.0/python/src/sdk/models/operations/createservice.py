from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_SERVICE_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class CreateServiceCreateServiceRequest:
    acl_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'AclEnabled' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    reachability_debouncing_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'ReachabilityDebouncingEnabled' }})
    reachability_debouncing_window: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'ReachabilityDebouncingWindow' }})
    reachability_webhooks_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'ReachabilityWebhooksEnabled' }})
    webhook_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'WebhookUrl' }})
    webhooks_from_rest_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'WebhooksFromRestEnabled' }})
    

@dataclass
class CreateServiceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateServiceRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateServiceCreateServiceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateServiceSecurity = field(default=None)
    

@dataclass
class CreateServiceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    sync_v1_service: Optional[shared.SyncV1Service] = field(default=None)
    
