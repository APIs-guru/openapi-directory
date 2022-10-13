from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNsxvControllerClusterPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNsxvControllerClusterSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNsxvControllerClusterRequest:
    path_params: GetNsxvControllerClusterPathParams = field(default=None)
    security: GetNsxvControllerClusterSecurity = field(default=None)
    

@dataclass
class GetNsxvControllerClusterResponse:
    content_type: str = field(default=None)
    nsx_controller_data_collection: Optional[shared.NsxControllerDataCollection] = field(default=None)
    status_code: int = field(default=None)
    
