from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchPermissionPathParams:
    permission_id: str = field(metadata={'path_param': { 'field_name': 'PermissionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchPermissionHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchPermissionRequest:
    headers: PatchPermissionHeaders = field()
    path_params: PatchPermissionPathParams = field()
    

@dataclass
class PatchPermissionResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    permission: Optional[shared.Permission] = field(default=None)
    
