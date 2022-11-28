from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEndpointsQueryParams:
    openapi: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'openapi', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEndpointsRequest:
    query_params: GetEndpointsQueryParams = field()
    

@dataclass
class GetEndpointsResponse:
    content_type: str = field()
    status_code: int = field()
    endpoint: Optional[shared.Endpoint] = field(default=None)
    
