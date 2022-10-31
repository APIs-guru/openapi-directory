from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeletePermissionPathParams:
    permission_id: str = field(default=None, metadata={'path_param': { 'field_name': 'PermissionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePermissionHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePermissionRequest:
    path_params: DeletePermissionPathParams = field(default=None)
    headers: DeletePermissionHeaders = field(default=None)
    

@dataclass
class DeletePermissionResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    
