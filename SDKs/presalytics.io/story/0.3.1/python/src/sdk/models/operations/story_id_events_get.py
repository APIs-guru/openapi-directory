from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class StoryIDEventsGetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDEventsGetRequest:
    path_params: StoryIDEventsGetPathParams = field()
    

@dataclass
class StoryIDEventsGetResponse:
    content_type: str = field()
    status_code: int = field()
    events: Optional[List[shared.Event]] = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    
