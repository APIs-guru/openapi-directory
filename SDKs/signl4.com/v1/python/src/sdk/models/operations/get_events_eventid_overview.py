from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEventsEventIDOverviewPathParams:
    event_id: str = field(metadata={'path_param': { 'field_name': 'eventId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventsEventIDOverviewRequest:
    path_params: GetEventsEventIDOverviewPathParams = field()
    

@dataclass
class GetEventsEventIDOverviewResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    overview_event: Optional[shared.OverviewEvent] = field(default=None)
    
