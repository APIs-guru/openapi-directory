from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddCiscoSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AddCiscoSwitchRequest:
    security: AddCiscoSwitchSecurity = field()
    request: Optional[shared.CiscoSwitchDataSourceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddCiscoSwitchResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    cisco_switch_data_source: Optional[shared.CiscoSwitchDataSource] = field(default=None)
    
