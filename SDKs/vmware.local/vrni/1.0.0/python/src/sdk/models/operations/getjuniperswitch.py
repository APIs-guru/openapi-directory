from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetJuniperSwitchPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetJuniperSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetJuniperSwitchRequest:
    path_params: GetJuniperSwitchPathParams = field(default=None)
    security: GetJuniperSwitchSecurity = field(default=None)
    

@dataclass
class GetJuniperSwitchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    switch_data_source: Optional[shared.SwitchDataSource] = field(default=None)
    
