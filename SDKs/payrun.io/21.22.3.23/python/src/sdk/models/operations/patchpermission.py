from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchPermissionPathParams:
    permission_id: str = field(default=None, metadata={'path_param': { 'field_name': 'PermissionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchPermissionHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class PatchPermissionRequest:
    path_params: PatchPermissionPathParams = field(default=None)
    headers: PatchPermissionHeaders = field(default=None)
    

@dataclass
class PatchPermissionResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    permission: Optional[shared.Permission] = field(default=None)
    status_code: int = field(default=None)
    
