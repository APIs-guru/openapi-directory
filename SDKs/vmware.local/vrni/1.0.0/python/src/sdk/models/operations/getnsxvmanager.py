from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNsxvManagerPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNsxvManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNsxvManagerRequest:
    path_params: GetNsxvManagerPathParams = field()
    security: GetNsxvManagerSecurity = field()
    

@dataclass
class GetNsxvManagerResponse:
    content_type: str = field()
    status_code: int = field()
    nsxv_manager_data_source: Optional[shared.NsxvManagerDataSource] = field(default=None)
    
