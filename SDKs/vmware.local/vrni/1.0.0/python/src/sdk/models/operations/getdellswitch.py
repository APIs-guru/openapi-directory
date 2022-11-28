from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDellSwitchPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDellSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDellSwitchRequest:
    path_params: GetDellSwitchPathParams = field()
    security: GetDellSwitchSecurity = field()
    

@dataclass
class GetDellSwitchResponse:
    content_type: str = field()
    status_code: int = field()
    dell_switch_data_source: Optional[shared.DellSwitchDataSource] = field(default=None)
    
