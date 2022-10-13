from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetProblemEventPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProblemEventQueryParams:
    time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProblemEventSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetProblemEventRequest:
    path_params: GetProblemEventPathParams = field(default=None)
    query_params: GetProblemEventQueryParams = field(default=None)
    security: GetProblemEventSecurity = field(default=None)
    

@dataclass
class GetProblemEventResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    content_type: str = field(default=None)
    problem_event: Optional[shared.ProblemEvent] = field(default=None)
    status_code: int = field(default=None)
    
