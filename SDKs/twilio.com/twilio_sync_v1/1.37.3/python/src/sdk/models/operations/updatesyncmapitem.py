from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


UPDATE_SYNC_MAP_ITEM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class UpdateSyncMapItemPathParams:
    key: str = field(metadata={'path_param': { 'field_name': 'Key', 'style': 'simple', 'explode': False }})
    map_sid: str = field(metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSyncMapItemHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSyncMapItemUpdateSyncMapItemRequest:
    collection_ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'CollectionTtl' }})
    data: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Data' }})
    item_ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'ItemTtl' }})
    ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    

@dataclass
class UpdateSyncMapItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSyncMapItemRequest:
    headers: UpdateSyncMapItemHeaders = field()
    path_params: UpdateSyncMapItemPathParams = field()
    security: UpdateSyncMapItemSecurity = field()
    request: Optional[UpdateSyncMapItemUpdateSyncMapItemRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateSyncMapItemResponse:
    content_type: str = field()
    status_code: int = field()
    sync_v1_service_sync_map_sync_map_item: Optional[shared.SyncV1ServiceSyncMapSyncMapItem] = field(default=None)
    
