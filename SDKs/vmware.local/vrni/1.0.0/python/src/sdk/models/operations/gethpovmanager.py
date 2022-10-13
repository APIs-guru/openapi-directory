from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetHpovManagerPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHpovManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetHpovManagerRequest:
    path_params: GetHpovManagerPathParams = field(default=None)
    security: GetHpovManagerSecurity = field(default=None)
    

@dataclass
class GetHpovManagerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    switch_data_source: Optional[shared.SwitchDataSource] = field(default=None)
    
