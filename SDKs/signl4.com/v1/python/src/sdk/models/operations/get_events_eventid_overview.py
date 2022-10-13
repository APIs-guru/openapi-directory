from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEventsEventIDOverviewPathParams:
    event_id: str = field(default=None, metadata={'path_param': { 'field_name': 'eventId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventsEventIDOverviewRequest:
    path_params: GetEventsEventIDOverviewPathParams = field(default=None)
    

@dataclass
class GetEventsEventIDOverviewResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    overview_event: Optional[shared.OverviewEvent] = field(default=None)
    status_code: int = field(default=None)
    
