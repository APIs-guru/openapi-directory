from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddAristaSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AddAristaSwitchRequest:
    security: AddAristaSwitchSecurity = field()
    request: Optional[shared.SwitchDataSourceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddAristaSwitchResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    switch_data_source: Optional[shared.SwitchDataSource] = field(default=None)
    
