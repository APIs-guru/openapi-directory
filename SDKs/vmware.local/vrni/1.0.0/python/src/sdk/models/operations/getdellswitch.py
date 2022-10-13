from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDellSwitchPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDellSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDellSwitchRequest:
    path_params: GetDellSwitchPathParams = field(default=None)
    security: GetDellSwitchSecurity = field(default=None)
    

@dataclass
class GetDellSwitchResponse:
    content_type: str = field(default=None)
    dell_switch_data_source: Optional[shared.DellSwitchDataSource] = field(default=None)
    status_code: int = field(default=None)
    
