from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateNsxvControllerClusterPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateNsxvControllerClusterSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateNsxvControllerClusterRequest:
    path_params: UpdateNsxvControllerClusterPathParams = field(default=None)
    request: Optional[shared.NsxControllerDataCollection] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateNsxvControllerClusterSecurity = field(default=None)
    

@dataclass
class UpdateNsxvControllerClusterResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    content_type: str = field(default=None)
    nsx_controller_data_collection: Optional[shared.NsxControllerDataCollection] = field(default=None)
    status_code: int = field(default=None)
    
