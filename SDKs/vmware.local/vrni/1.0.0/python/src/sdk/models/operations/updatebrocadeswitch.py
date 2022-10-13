from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateBrocadeSwitchPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateBrocadeSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateBrocadeSwitchRequest:
    path_params: UpdateBrocadeSwitchPathParams = field(default=None)
    request: Optional[shared.SwitchDataSource] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateBrocadeSwitchSecurity = field(default=None)
    

@dataclass
class UpdateBrocadeSwitchResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    switch_data_source: Optional[shared.SwitchDataSource] = field(default=None)
    
