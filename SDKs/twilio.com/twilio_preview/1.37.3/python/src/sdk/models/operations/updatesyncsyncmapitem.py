from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


UPDATE_SYNC_SYNC_MAP_ITEM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class UpdateSyncSyncMapItemPathParams:
    key: str = field(metadata={'path_param': { 'field_name': 'Key', 'style': 'simple', 'explode': False }})
    map_sid: str = field(metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSyncSyncMapItemHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSyncSyncMapItemUpdateSyncSyncMapItemRequest:
    data: Any = field(metadata={'form': { 'field_name': 'Data' }})
    

@dataclass
class UpdateSyncSyncMapItemSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSyncSyncMapItemRequest:
    headers: UpdateSyncSyncMapItemHeaders = field()
    path_params: UpdateSyncSyncMapItemPathParams = field()
    security: UpdateSyncSyncMapItemSecurity = field()
    request: Optional[UpdateSyncSyncMapItemUpdateSyncSyncMapItemRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateSyncSyncMapItemResponse:
    content_type: str = field()
    status_code: int = field()
    preview_sync_service_sync_map_sync_map_item: Optional[shared.PreviewSyncServiceSyncMapSyncMapItem] = field(default=None)
    
