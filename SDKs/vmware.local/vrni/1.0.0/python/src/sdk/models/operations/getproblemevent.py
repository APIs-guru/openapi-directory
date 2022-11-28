from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetProblemEventPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProblemEventQueryParams:
    time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProblemEventSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetProblemEventRequest:
    path_params: GetProblemEventPathParams = field()
    query_params: GetProblemEventQueryParams = field()
    security: GetProblemEventSecurity = field()
    

@dataclass
class GetProblemEventResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    problem_event: Optional[shared.ProblemEvent] = field(default=None)
    
