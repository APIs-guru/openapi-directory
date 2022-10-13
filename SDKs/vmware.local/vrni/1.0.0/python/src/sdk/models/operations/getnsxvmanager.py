from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNsxvManagerPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNsxvManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNsxvManagerRequest:
    path_params: GetNsxvManagerPathParams = field(default=None)
    security: GetNsxvManagerSecurity = field(default=None)
    

@dataclass
class GetNsxvManagerResponse:
    content_type: str = field(default=None)
    nsxv_manager_data_source: Optional[shared.NsxvManagerDataSource] = field(default=None)
    status_code: int = field(default=None)
    
