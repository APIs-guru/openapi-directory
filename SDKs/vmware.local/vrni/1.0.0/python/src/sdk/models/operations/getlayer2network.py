from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetLayer2NetworkPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLayer2NetworkQueryParams:
    time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLayer2NetworkSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetLayer2NetworkRequest:
    path_params: GetLayer2NetworkPathParams = field(default=None)
    query_params: GetLayer2NetworkQueryParams = field(default=None)
    security: GetLayer2NetworkSecurity = field(default=None)
    

@dataclass
class GetLayer2NetworkResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    base_l2_network: Optional[shared.BaseL2Network] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
