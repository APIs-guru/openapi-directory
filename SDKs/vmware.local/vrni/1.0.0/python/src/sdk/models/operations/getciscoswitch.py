from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCiscoSwitchPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCiscoSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetCiscoSwitchRequest:
    path_params: GetCiscoSwitchPathParams = field(default=None)
    security: GetCiscoSwitchSecurity = field(default=None)
    

@dataclass
class GetCiscoSwitchResponse:
    cisco_switch_data_source: Optional[shared.CiscoSwitchDataSource] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
