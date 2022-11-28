from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_SYNC_SERVICE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateSyncServicePathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSyncServiceUpdateSyncServiceRequest:
    acl_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'AclEnabled' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    reachability_webhooks_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'ReachabilityWebhooksEnabled' }})
    webhook_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'WebhookUrl' }})
    

@dataclass
class UpdateSyncServiceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSyncServiceRequest:
    path_params: UpdateSyncServicePathParams = field()
    security: UpdateSyncServiceSecurity = field()
    request: Optional[UpdateSyncServiceUpdateSyncServiceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateSyncServiceResponse:
    content_type: str = field()
    status_code: int = field()
    preview_sync_service: Optional[shared.PreviewSyncService] = field(default=None)
    
