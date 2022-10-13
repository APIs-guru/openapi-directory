from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddDellSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AddDellSwitchRequest:
    request: Optional[shared.DellSwitchDataSourceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AddDellSwitchSecurity = field(default=None)
    

@dataclass
class AddDellSwitchResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    content_type: str = field(default=None)
    dell_switch_data_source: Optional[shared.DellSwitchDataSource] = field(default=None)
    status_code: int = field(default=None)
    
