from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddCiscoSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AddCiscoSwitchRequest:
    request: Optional[shared.CiscoSwitchDataSourceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AddCiscoSwitchSecurity = field(default=None)
    

@dataclass
class AddCiscoSwitchResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    cisco_switch_data_source: Optional[shared.CiscoSwitchDataSource] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
