from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEndpointsQueryParams:
    openapi: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'openapi', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEndpointsRequest:
    query_params: GetEndpointsQueryParams = field(default=None)
    

@dataclass
class GetEndpointsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    endpoint: Optional[shared.Endpoint] = field(default=None)
    
