from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateDellSwitchPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDellSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateDellSwitchRequest:
    path_params: UpdateDellSwitchPathParams = field(default=None)
    request: Optional[shared.DellSwitchDataSource] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateDellSwitchSecurity = field(default=None)
    

@dataclass
class UpdateDellSwitchResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    content_type: str = field(default=None)
    dell_switch_data_source: Optional[shared.DellSwitchDataSource] = field(default=None)
    status_code: int = field(default=None)
    
