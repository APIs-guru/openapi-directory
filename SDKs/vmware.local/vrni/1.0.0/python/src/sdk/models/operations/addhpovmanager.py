from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddHpovManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AddHpovManagerRequest:
    security: AddHpovManagerSecurity = field()
    request: Optional[shared.SwitchDataSource] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddHpovManagerResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    switch_data_source: Optional[shared.SwitchDataSource] = field(default=None)
    
