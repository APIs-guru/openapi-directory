from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddDellSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AddDellSwitchRequest:
    security: AddDellSwitchSecurity = field()
    request: Optional[shared.DellSwitchDataSourceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddDellSwitchResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    dell_switch_data_source: Optional[shared.DellSwitchDataSource] = field(default=None)
    
