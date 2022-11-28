from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutPermissionPathParams:
    permission_id: str = field(metadata={'path_param': { 'field_name': 'PermissionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutPermissionHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutPermissionRequest:
    headers: PutPermissionHeaders = field()
    path_params: PutPermissionPathParams = field()
    

@dataclass
class PutPermissionResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    permission: Optional[shared.Permission] = field(default=None)
    
