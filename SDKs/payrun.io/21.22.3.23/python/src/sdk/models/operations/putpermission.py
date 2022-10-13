from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutPermissionPathParams:
    permission_id: str = field(default=None, metadata={'path_param': { 'field_name': 'PermissionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutPermissionHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class PutPermissionRequest:
    path_params: PutPermissionPathParams = field(default=None)
    headers: PutPermissionHeaders = field(default=None)
    

@dataclass
class PutPermissionResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    permission: Optional[shared.Permission] = field(default=None)
    status_code: int = field(default=None)
    
