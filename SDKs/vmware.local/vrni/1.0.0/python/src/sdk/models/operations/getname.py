from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNamePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNameQueryParams:
    time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNameSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNameRequest:
    path_params: GetNamePathParams = field()
    query_params: GetNameQueryParams = field()
    security: GetNameSecurity = field()
    

@dataclass
class GetNameResponse:
    content_type: str = field()
    status_code: int = field()
    entity_name: Optional[shared.EntityName] = field(default=None)
    
