from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_SYNC_SERVICE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateSyncServiceCreateSyncServiceRequest:
    acl_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'AclEnabled' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    reachability_webhooks_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'ReachabilityWebhooksEnabled' }})
    webhook_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'WebhookUrl' }})
    

@dataclass
class CreateSyncServiceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSyncServiceRequest:
    security: CreateSyncServiceSecurity = field()
    request: Optional[CreateSyncServiceCreateSyncServiceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateSyncServiceResponse:
    content_type: str = field()
    status_code: int = field()
    preview_sync_service: Optional[shared.PreviewSyncService] = field(default=None)
    
