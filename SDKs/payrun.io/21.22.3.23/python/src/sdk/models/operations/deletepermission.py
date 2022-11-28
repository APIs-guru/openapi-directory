from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeletePermissionPathParams:
    permission_id: str = field(metadata={'path_param': { 'field_name': 'PermissionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePermissionHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePermissionRequest:
    headers: DeletePermissionHeaders = field()
    path_params: DeletePermissionPathParams = field()
    

@dataclass
class DeletePermissionResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
