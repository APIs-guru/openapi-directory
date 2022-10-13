from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEventsEventIDParametersPathParams:
    event_id: str = field(default=None, metadata={'path_param': { 'field_name': 'eventId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventsEventIDParametersRequest:
    path_params: GetEventsEventIDParametersPathParams = field(default=None)
    

@dataclass
class GetEventsEventIDParametersResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    event_parameter_infos: Optional[List[shared.EventParameterInfo]] = field(default=None)
    status_code: int = field(default=None)
    
