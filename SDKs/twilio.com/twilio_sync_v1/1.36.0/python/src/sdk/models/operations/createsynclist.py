from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
CREATE_SYNC_LIST_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class CreateSyncListPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSyncListRequestBodyCreateSyncListRequest:
    collection_ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'CollectionTtl' }})
    ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class CreateSyncListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSyncListRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateSyncListPathParams = field(default=None)
    request: Optional[CreateSyncListRequestBodyCreateSyncListRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSyncListSecurity = field(default=None)
    

@dataclass
class CreateSyncListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    sync_v1_service_sync_list: Optional[shared.SyncV1ServiceSyncList] = field(default=None)
    
