from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNsxManagerPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNsxManagerQueryParams:
    time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNsxManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNsxManagerRequest:
    path_params: GetNsxManagerPathParams = field()
    query_params: GetNsxManagerQueryParams = field()
    security: GetNsxManagerSecurity = field()
    

@dataclass
class GetNsxManagerResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    base_entity: Optional[shared.BaseEntity] = field(default=None)
    
