from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class StoryIDMessagesGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDMessagesGetRequest:
    path_params: StoryIDMessagesGetPathParams = field(default=None)
    

@dataclass
class StoryIDMessagesGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    messages: Optional[List[Any]] = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    
