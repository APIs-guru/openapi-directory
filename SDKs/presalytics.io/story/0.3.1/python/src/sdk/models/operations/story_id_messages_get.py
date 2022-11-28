from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class StoryIDMessagesGetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDMessagesGetRequest:
    path_params: StoryIDMessagesGetPathParams = field()
    

@dataclass
class StoryIDMessagesGetResponse:
    content_type: str = field()
    status_code: int = field()
    messages: Optional[List[Any]] = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    
