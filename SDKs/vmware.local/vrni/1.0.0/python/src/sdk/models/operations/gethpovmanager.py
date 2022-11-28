from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetHpovManagerPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHpovManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetHpovManagerRequest:
    path_params: GetHpovManagerPathParams = field()
    security: GetHpovManagerSecurity = field()
    

@dataclass
class GetHpovManagerResponse:
    content_type: str = field()
    status_code: int = field()
    switch_data_source: Optional[shared.SwitchDataSource] = field(default=None)
    
