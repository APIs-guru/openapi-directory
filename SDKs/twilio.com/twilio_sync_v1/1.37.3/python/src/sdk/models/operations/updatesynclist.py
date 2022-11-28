from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_SYNC_LIST_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class UpdateSyncListPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSyncListUpdateSyncListRequest:
    collection_ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'CollectionTtl' }})
    ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    

@dataclass
class UpdateSyncListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSyncListRequest:
    path_params: UpdateSyncListPathParams = field()
    security: UpdateSyncListSecurity = field()
    request: Optional[UpdateSyncListUpdateSyncListRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateSyncListResponse:
    content_type: str = field()
    status_code: int = field()
    sync_v1_service_sync_list: Optional[shared.SyncV1ServiceSyncList] = field(default=None)
    
