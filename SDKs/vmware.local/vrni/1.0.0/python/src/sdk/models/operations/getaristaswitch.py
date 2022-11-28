from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAristaSwitchPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAristaSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAristaSwitchRequest:
    path_params: GetAristaSwitchPathParams = field()
    security: GetAristaSwitchSecurity = field()
    

@dataclass
class GetAristaSwitchResponse:
    content_type: str = field()
    status_code: int = field()
    switch_data_source: Optional[shared.SwitchDataSource] = field(default=None)
    
