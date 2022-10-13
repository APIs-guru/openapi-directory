from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNamePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNameQueryParams:
    time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNameSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNameRequest:
    path_params: GetNamePathParams = field(default=None)
    query_params: GetNameQueryParams = field(default=None)
    security: GetNameSecurity = field(default=None)
    

@dataclass
class GetNameResponse:
    content_type: str = field(default=None)
    entity_name: Optional[shared.EntityName] = field(default=None)
    status_code: int = field(default=None)
    
