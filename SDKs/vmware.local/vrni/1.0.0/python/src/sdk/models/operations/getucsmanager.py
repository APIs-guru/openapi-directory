from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUcsManagerPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUcsManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetUcsManagerRequest:
    path_params: GetUcsManagerPathParams = field()
    security: GetUcsManagerSecurity = field()
    

@dataclass
class GetUcsManagerResponse:
    content_type: str = field()
    status_code: int = field()
    switch_data_source: Optional[shared.SwitchDataSource] = field(default=None)
    
