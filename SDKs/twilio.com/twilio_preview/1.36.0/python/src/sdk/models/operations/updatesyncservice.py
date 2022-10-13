from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_SYNC_SERVICE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateSyncServicePathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSyncServiceRequestBodyUpdateSyncServiceRequest:
    acl_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'AclEnabled' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    reachability_webhooks_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'ReachabilityWebhooksEnabled' }})
    webhook_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'WebhookUrl' }})
    

@dataclass
class UpdateSyncServiceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSyncServiceRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSyncServicePathParams = field(default=None)
    request: Optional[UpdateSyncServiceRequestBodyUpdateSyncServiceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSyncServiceSecurity = field(default=None)
    

@dataclass
class UpdateSyncServiceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_sync_service: Optional[shared.PreviewSyncService] = field(default=None)
    
