from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_SYNC_MAP_PERMISSION_SERVERS = [
	"https://sync.twilio.com",
]


@dataclass
class UpdateSyncMapPermissionPathParams:
    identity: str = field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    map_sid: str = field(metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSyncMapPermissionUpdateSyncMapPermissionRequest:
    manage: bool = field(metadata={'form': { 'field_name': 'Manage' }})
    read: bool = field(metadata={'form': { 'field_name': 'Read' }})
    write: bool = field(metadata={'form': { 'field_name': 'Write' }})
    

@dataclass
class UpdateSyncMapPermissionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSyncMapPermissionRequest:
    path_params: UpdateSyncMapPermissionPathParams = field()
    security: UpdateSyncMapPermissionSecurity = field()
    request: Optional[UpdateSyncMapPermissionUpdateSyncMapPermissionRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateSyncMapPermissionResponse:
    content_type: str = field()
    status_code: int = field()
    sync_v1_service_sync_map_sync_map_permission: Optional[shared.SyncV1ServiceSyncMapSyncMapPermission] = field(default=None)
    
