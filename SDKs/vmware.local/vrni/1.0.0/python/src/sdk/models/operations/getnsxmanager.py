from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNsxManagerPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNsxManagerQueryParams:
    time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNsxManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNsxManagerRequest:
    path_params: GetNsxManagerPathParams = field(default=None)
    query_params: GetNsxManagerQueryParams = field(default=None)
    security: GetNsxManagerSecurity = field(default=None)
    

@dataclass
class GetNsxManagerResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    base_entity: Optional[shared.BaseEntity] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
