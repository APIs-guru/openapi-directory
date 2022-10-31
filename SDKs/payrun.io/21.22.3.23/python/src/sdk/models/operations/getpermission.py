from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPermissionPathParams:
    permission_id: str = field(default=None, metadata={'path_param': { 'field_name': 'PermissionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPermissionHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPermissionRequest:
    path_params: GetPermissionPathParams = field(default=None)
    headers: GetPermissionHeaders = field(default=None)
    

@dataclass
class GetPermissionResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    permission: Optional[shared.Permission] = field(default=None)
    status_code: int = field(default=None)
    
