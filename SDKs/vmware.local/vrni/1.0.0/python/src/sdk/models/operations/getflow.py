from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFlowPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFlowQueryParams:
    time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFlowSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFlowRequest:
    path_params: GetFlowPathParams = field(default=None)
    query_params: GetFlowQueryParams = field(default=None)
    security: GetFlowSecurity = field(default=None)
    

@dataclass
class GetFlowResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    content_type: str = field(default=None)
    flow: Optional[shared.Flow] = field(default=None)
    status_code: int = field(default=None)
    
