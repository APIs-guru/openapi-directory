from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCiscoSwitchPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCiscoSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetCiscoSwitchRequest:
    path_params: GetCiscoSwitchPathParams = field()
    security: GetCiscoSwitchSecurity = field()
    

@dataclass
class GetCiscoSwitchResponse:
    content_type: str = field()
    status_code: int = field()
    cisco_switch_data_source: Optional[shared.CiscoSwitchDataSource] = field(default=None)
    
