from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddHpvcManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AddHpvcManagerRequest:
    request: Optional[shared.SwitchDataSource] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AddHpvcManagerSecurity = field(default=None)
    

@dataclass
class AddHpvcManagerResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    switch_data_source: Optional[shared.SwitchDataSource] = field(default=None)
    
