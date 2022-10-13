from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateCiscoSwitchPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCiscoSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateCiscoSwitchRequest:
    path_params: UpdateCiscoSwitchPathParams = field(default=None)
    request: Optional[shared.CiscoSwitchDataSource] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateCiscoSwitchSecurity = field(default=None)
    

@dataclass
class UpdateCiscoSwitchResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    cisco_switch_data_source: Optional[shared.CiscoSwitchDataSource] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
