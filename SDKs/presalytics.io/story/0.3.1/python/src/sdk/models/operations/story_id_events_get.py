from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class StoryIDEventsGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDEventsGetRequest:
    path_params: StoryIDEventsGetPathParams = field(default=None)
    

@dataclass
class StoryIDEventsGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    events: Optional[List[shared.Event]] = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    
